const { syncIndexes } = require('mongoose')
const { sequelize, products, wishlists, categories, sub_categories } = require('../models')

async function CreateProducts(req, res) {

    const product_name = req.body.product_name
    const product_title = req.body.product_title
    const product_additional_information = req.body.product_additional_information
    const product_price = req.body.product_price
    const product_description = req.body.product_description
    const product_quantity = req.body.product_quantity
    const product_category_id = req.body.product_category_id
    const product_sub_category_id = req.body.product_sub_category_id
    const meta_title = req.body.meta_title
    const meta_description = req.body.meta_description
    const meta_keywords = req.body.meta_keywords
    const hash_tags = req.body.hash_tags
    // const files = req.files;
    // var all_images;
    // files.forEach(file => {
    //     all_images.push(file)
    // })
    product_images = JSON.stringify(req.files)
    const result = await products.create({
        product_name,
        product_title,
        product_additional_information,
        product_quantity,
        product_price,
        product_images,
        product_description,
        product_category_id,
        product_sub_category_id,
        meta_title,
        meta_description,
        meta_keywords,
        hash_tags
    })
    if (result) {
        req.flash('message', "Product Created Successfully")
        return res.redirect('/admin_products_table')
    } else {
        return res.redirect('back')
    }
}
async function GetAllProducts(req, res) {
    var total_cart_price = 0;
    var all_cart_products = [];
    var all_cart_images = [];
    var all_query_data_images = [];
    var all_query_data = [];
    if (req.session.cart) {
        var cart = req.session.cart;
        for (let i = 0; i < cart.length; i++) {
            await sequelize.query("SELECT * FROM products WHERE id= '" + cart[i].product_id + "' ").then(function (single_product) {
                all_cart_products.push(single_product[0])
                all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))
                total_cart_price += parseInt(single_product[0][0].product_price)
                console.log(" First  " + all_cart_products + " Single is " + single_product)
            })
        }
    }

    var all_product_images_in_database = [];
    var all_product_in_database = await products.findAll();

    for (let j = 0; j < all_product_in_database.length; j++) {
        all_product_images_in_database.push(JSON.parse(all_product_in_database[j].product_images))
    }

    if (req.query.sub_category_id) {
        const sub_category_id = req.query.sub_category_id;
        all_query_data_images = [];
        await sequelize.query("SELECT * FROM products WHERE product_sub_category_id= '" + sub_category_id + "' ").then(function (element) {
            all_query_data = element[0]
        })
        // return res.send(all_query_data[0])
        for (let k = 0; k < all_query_data.length; k++) {
            all_query_data_images.push(JSON.parse(all_query_data[k].product_images))
        }
        // return res.send(all_query_data_images)
        return res.render('all-products', { req: req, res: res, all_product_images_in_database: all_product_images_in_database, all_product_in_database: all_product_in_database, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images, all_query_data: all_query_data, all_query_data_images: all_query_data_images })
    }
    return res.render('all-products', { req: req, res: res, all_product_images_in_database: all_product_images_in_database, all_product_in_database: all_product_in_database, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images, all_query_data: all_query_data, all_query_data_images: all_query_data_images })
}

async function UpdateProduct(req, res) {
    const id = req.query.product_id
    const result = await products.findById(id)
    if (result) {
        result.name = req.body.name;
        result.cost = req.body.cost;
        result.description = res.body.description;
        result.quantity = req.body.quantity;
        result.save();
    }
    return res.send("Data Upadated");
}

async function DeleteProduct(req, res) {
    const id = req.query.product_id
    const result = await products.findById(id)
    if (result) {
        result.destroy();
    }
    return res.send("Data Deleted successfully")
}

async function GetProductById(req, res) {
    const id = req.query.product_id
    var similarProducts;
    var similarProducts_images = [];
    const single_product_details = await products.findOne({
        where: {
            id: id,
        }
    })
    await sequelize.query("SELECT `categories`.`category`,`sub_categories`.`sub_category`,`products`.* FROM `products` INNER JOIN `sub_categories` ON `products`.`product_sub_category_id`=`sub_categories`.`id` INNER JOIN `categories` ON `products`.`product_category_id`=`categories`.`id` ;").then(function (result) {
        similarProducts = result[0];
        // all_product_images_in_database.push(JSON.parse(result[0].product_images))
        // return res.send(similarProducts)
    })
    for (let i = 0; i < similarProducts.length; i++) {
        similarProducts_images.push(JSON.parse(similarProducts[i].product_images))
    }


    var total_cart_price = 0;
    var all_cart_products = [];
    var all_cart_images = [];
    if (req.session.cart) {
        var cart = req.session.cart;
        for (let i = 0; i < cart.length; i++) {
            await sequelize.query("SELECT * FROM products WHERE id= '" + cart[i].product_id + "' ").then(function (single_product) {
                all_cart_products.push(single_product[0])
                all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))
                total_cart_price += parseInt(single_product[0][0].product_price)
                console.log(" First  " + all_cart_products + " Single is " + single_product)
            })
        }
    }


    if (single_product_details) {
        const single_product_images = JSON.parse(single_product_details.product_images)
        // return res.send(single_product_images[0])
        return res.render('product_page', { req: req, res: res, single_product_details: single_product_details, similarProducts: similarProducts, similarProducts_images: similarProducts_images, single_product_images: single_product_images, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })
    } else {
        return res.redirect("back")
    }
}


async function ProductCategory(req, res) {
    var total_cart_price = 0;
    var all_cart_products = [];
    var all_cart_images = [];
    var all_products_categories = [];
    var all_products_categories_images = [];


    var all_categories = await sub_categories.findAll();
    for (let i = 0; i < all_categories.length; i++) {
        const result = await products.findOne({
            where: {
                product_sub_category_id: all_categories[i].id,
                product_category_id: all_categories[i].category_id
            }
        })
        all_products_categories.push(result)
    }

    for (let k = 0; k < all_products_categories.length; k++) {
        all_products_categories_images.push(JSON.parse(all_products_categories[k].product_images))
    }

    if (req.session.cart) {
        var cart = req.session.cart;
        for (let i = 0; i < cart.length; i++) {
            await sequelize.query("SELECT * FROM products WHERE id= '" + cart[i].product_id + "' ").then(function (single_product) {
                all_cart_products.push(single_product[0])
                all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))
                total_cart_price += parseInt(single_product[0][0].product_price)
                console.log(" First  " + all_cart_products + " Single is " + single_product)
            })
        }
    }
    if (req.session.user_id) {
        var id = req.session.user_id;
        const wishlist = await wishlists.findAll({ where: { user_id: id } });
        return res.render('product_category', { products: "products", req: req, res: res, wishlist: wishlist, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images, all_products_categories: all_products_categories, all_products_categories_images: all_products_categories_images, all_categories: all_categories })
    }
    return res.render('product_category', { products: "products", req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images, all_products_categories: all_products_categories, all_products_categories_images: all_products_categories_images, all_categories: all_categories })

}

async function update_product(req, res) {
    // return res.send(req.files)
    const product_id = req.body.product_id
    const result = await products.findOne({
        where: {
            id: product_id
        }
    })
    if (result) {
        result.product_name = req.body.product_name
        result.product_title = req.body.product_title
        result.product_additional_information = req.body.product_additional_information
        result.product_price = req.body.product_price
        result.product_description = req.body.product_description
        result.product_quantity = req.body.product_quantity
        result.product_category_id = req.body.product_category_id
        result.product_sub_category_id = req.body.product_sub_category_id
        result.meta_title = req.body.meta_title
        result.meta_description = req.body.meta_description
        result.meta_keywords = req.body.meta_keywords
        result.hash_tags = req.body.hash_tags
        if (req.files.length > 0) {
            // image = JSON.parse(result.product_images)
            new_image = JSON.stringify(req.files)
            result.product_images = new_image;
        }

        result.save()
        req.flash('message', "Product updated successfully")
        return res.redirect('/admin_products_table')
    } else {
        return res.redirect('back')
    }
}



module.exports = {
    update_product, CreateProducts, GetProductById, GetAllProducts, DeleteProduct, UpdateProduct, ProductCategory
}