const { sequelize, contact_us, wishlists, testimonials, products, blogs } = require('../models')
var cookie = require('cookie');


async function index(req, res) {
    var all_product_images_in_database = [];
    var all_cart_images = [];
    var all_product_in_database = await products.findAll({
        limit: 8
    });

    for (let j = 0; j < all_product_in_database.length; j++) {
        all_product_images_in_database.push(JSON.parse(all_product_in_database[j].product_images))
    }
    var total_cart_price = 0;
    var all_cart_products = [];

    var all_blogs_in_database = await blogs.findAll({ limit: 3 });

    if (req.session.cart) {
        var cart = req.session.cart;
        for (let i = 0; i < cart.length; i++) {
            await sequelize.query("SELECT * FROM products WHERE id= '" + cart[i].product_id + "' ").then(function (single_product) {
                all_cart_products.push(single_product[0])
                all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))

                total_cart_price += parseInt(single_product[0][0].product_price)
                all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))

                console.log(" First  " + all_cart_products + " Single is " + single_product)
            })
        }
    }


    if (req.session.user_id) {
        var id = req.session.user_id;
        const wishlist = await wishlists.findAll({ where: { user_id: id } });
        return res.render('index', { index: "index", req: req, res: res, wishlist: wishlist, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_product_in_database: all_product_in_database, all_blogs_in_database: all_blogs_in_database, all_product_images_in_database: all_product_images_in_database, all_cart_images: all_cart_images })
    }

    return res.render('index', { index: "index", req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_product_in_database: all_product_in_database, all_blogs_in_database: all_blogs_in_database, all_product_images_in_database: all_product_images_in_database, all_cart_images: all_cart_images })
}


async function about(req, res) {
    var total_cart_price = 0;
    var all_cart_products = [];
    var testimonial_review;
    var all_cart_images = [];
    const testimonial = await testimonials.findAll();
    if (testimonial) {
        testimonial_review = testimonial;
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
        return res.render('about', { about: "about", req: req, res: res, wishlist: wishlist, all_cart_products: all_cart_products, total_cart_price: total_cart_price, testimonial_review: testimonial_review, all_cart_images: all_cart_images });
    }
    return res.render('about', { about: "about", req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, testimonial_review: testimonial_review, all_cart_images: all_cart_images })
}

async function blog(req, res) {
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


    const all_blogs = await blogs.findAll();
    if (req.session.user_id) {
        var id = req.session.user_id;
        const wishlist = await wishlists.findAll({ where: { user_id: id } });
        return res.render('blog', { blog: "blog", req: req, res: res, wishlist: wishlist, all_blogs: all_blogs, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })

    }
    return res.render('blog', { blog: "blog", req: req, res: res, all_blogs: all_blogs, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })
}

async function faq(req, res) {
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


    if (req.session.user_id) {
        var id = req.session.user_id;
        const wishlist = await wishlists.findAll({ where: { user_id: id } });
        return res.render('faq', { req: req, res: res, wishlist: wishlist, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })
    }
    return res.render('faq', { req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })
}


async function contact(req, res) {
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
    if (req.session.user_id) {
        var id = req.session.user_id;
        const wishlist = await wishlists.findAll({ where: { user_id: id } });
        return res.render('contact', { message: req.flash('msg'), contact: "contact", req: req, res: res, wishlist: wishlist, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })

    }
    return res.render('contact', { message: req.flash('msg'), contact: "contact", req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })
}


async function contact_us_form(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const contact_no = req.body.contact_no;
    const subject = req.body.subject;
    const message = req.body.message;
    const result = await contact_us.create({ name: name, email: email, subject: subject, message: message, contact_no: contact_no });
    if (result) {
        req.flash('msg', 'Your form has been submitted Successfully!')
        return res.redirect('/contact')

    } else {
        req.flash('msg', 'Something went wrong please try again!')
        return res.redirect('/contact')
    }
}

async function single_blog(req, res) {
    const blog_id = req.query.blog_id;
    const single_blog = await blogs.findOne({
        where: {
            id: blog_id
        }
    })
    const all_blogs = await blogs.findAll({ limit: 5 });
    return res.render('single', { req: req, res: res, single_blog: single_blog, all_blogs: all_blogs });
}

module.exports = {
    index, about, blog, contact, contact_us_form, faq, single_blog
}