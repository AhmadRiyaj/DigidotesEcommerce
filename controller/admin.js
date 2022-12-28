const { sequelize, users, wishlists, products, categories, contact_us, sub_categories, blogs, testimonials } = require('../models')

async function admin_dashboard(req, res) {
    return res.render('Admin/html/index')
}

async function admin_all_orders(req, res) {
    return res.render('Admin/html/all-orders')
}

async function admin_products_table(req, res) {
    var products;
    var images = [];
    await sequelize.query("SELECT `categories`.`category`,`sub_categories`.`sub_category`,`products`.* FROM `products` INNER JOIN `categories` ON `products`.`product_category_id`=`categories`.`id` INNER JOIN `sub_categories`  ON `products`.`product_sub_category_id`=`sub_categories`.`id`").then(function (element) {
        products = element[0];
    })

    for (let i = 0; i < products.length; i++) {
        images.push(JSON.parse(products[i].product_images))
    }
    return res.render('Admin/html/products-table', { message: req.flash('message'), products: products, product_images: images })
}

async function admin_add_product(req, res) {
    var result;
    if (req.query.product_id) {
        result = await products.findOne({
            where: {
                id: req.query.product_id
            }
        })
        const category = await categories.findAll();
        const image = JSON.parse(result.product_images)

        return res.render('Admin/html/manage-products', { category: category, result: result, image: image })
    }
    const category = await categories.findAll();
    return res.render('Admin/html/manage-products', { category: category, result: result })
}

async function admin_allcategories(req, res) {

    const result = await categories.findAll();
    return res.render('Admin/html/categories', { message: req.flash('success'), all_categories: result })
}

async function admin_add_category(req, res) {
    if (req.query.category_id) {
        const result = await categories.findOne({
            where: {
                id: req.query.category_id
            }
        });
        return res.render('Admin/html/manage-category', { result: result })

    }
    return res.render('Admin/html/manage-category')
}

async function admin_all_subcategories(req, res) {
    var result;
    await sequelize.query("SELECT `sub_categories`.id,`sub_categories`.`description`,`sub_categories`.`createdAt`,`sub_categories`.`sub_category`,categories.category FROM `sub_categories` INNER JOIN categories ON `sub_categories`.`category_id`=`categories`.`id`").then(function (element) {
        result = element[0];

    })
    // return res.send(result);
    return res.render('Admin/html/sub_categories', { message: req.flash('success'), result: result })
}

async function admin_add_subcategory(req, res) {
    if (req.query.sub_category_id) {
        console.log("Riyaj" + req.query.sub_category_id)
        const all_categories = await categories.findAll();
        const result = await sub_categories.findOne({
            where: { id: req.query.sub_category_id }
        })
        const category = await categories.findOne({
            where: { id: result.category_id }
        })

        // return res.send({ category: category.category, result: result })
        return res.render('Admin/html/manage_sub_categories', { category: category, result: result, all_categories: all_categories })

    }
    const result = await categories.findAll();
    return res.render('Admin/html/manage_sub_categories', { all_categories: result, error: req.flash('error') })
}

async function admin_all_banner(req, res) {
    return res.render('Admin/html/banner')
}

async function admin_add_banner(req, res) {
    return res.render('Admin/html/manage_banner')
}

async function admin_all_testimonial(req, res) {
    const result = await testimonials.findAll()
    return res.render('Admin/html/testimonial', { message: req.flash('message'), all_testimonials: result })
}

async function admin_add_testimonial(req, res) {
    if (req.query.testimonial_id) {
        console.log(req.query.testimonial_id)
        const result = await testimonials.findOne({ where: { id: req.query.testimonial_id } })
        return res.render('Admin/html/manage_testimonial', { result: result })
    }
    return res.render('Admin/html/manage_testimonial', { message: req.flash('message') })
}



async function admin_all_blog(req, res) {
    const result = await blogs.findAll();
    return res.render('Admin/html/manage_blog', { message: req.flash('message'), all_blogs: result })
}

async function admin_add_blog(req, res) {
    if (req.query.blog_id) {

        const result = await blogs.findOne({ where: { id: req.query.blog_id } });
        return res.render('Admin/html/blog', { result: result });
    }
    return res.render('Admin/html/blog', { message: req.flash('message') })
}

async function admin_contact_us(req, res) {
    const result = await contact_us.findAll()

    return res.render('Admin/html/contact_us', { result: result })
}

async function admin_all_users(req, res) {
    const allusers = await users.findAll()
    return res.render('Admin/html/users', { allusers: allusers })
}

async function invoice(req, res) {
    return res.render('Admin/html/invoice')
}

async function insert_new_blog(req, res) {
    const title = req.body.title;
    const heading = req.body.heading
    const description = req.body.description
    const image_alt_tag = req.body.image_alt_tag
    const meta_title = req.body.meta_title
    const meta_description = req.body.meta_description
    const meta_keyword = req.body.meta_keyword
    const hash_tag = req.body.hash_tag
    const image = req.file.filename
    const result = blogs.create({
        title, heading,
        description,
        image_alt_tag,
        meta_title,
        meta_description,
        meta_keyword,
        hash_tag,
        image,
    })
    if (result) {
        req.flash('message', 'Blog created successfully')
        return res.redirect('/admin_all_blog')
    } else {
        req.flash('message', 'Something Went wrong...')
        return res.redirect('/admin_add_blog')
    }
}

async function insert_testimonial(req, res) {
    const name = req.body.name;
    const comment = req.body.comment
    const image = req.file.filename
    const result = await testimonials.create({ name, comment, image })

    if (result) {
        req.flash('message', 'Testimonial created successfully')

        return res.redirect('/admin_all_testimonial')
    } else {
        req.flash('message', 'Something Went wrong...')

        return res.redirect('/admin_add_testimonial')

    }
}


async function update_blog_changes(req, res) {
    const blog_id = req.body.blog_id;
    console.log(blog_id);
    const result = await blogs.findOne({
        where: { id: blog_id }
    })
    if (result) {
        result.title = req.body.title
        result.heading = req.body.heading
        result.image_alt_tag = req.body.image_alt_tag
        result.hash_tag = req.body.hash_tag
        result.meta_title = req.body.meta_title
        result.meta_keyword = req.body.meta_keyword
        result.meta_description = req.body.meta_description
        result.description = req.body.description
        if (req.file) {
            result.image = req.file.filename;
        }
        result.save()
        req.flash('message', 'Blog Updated Successfully')
        return res.redirect('/admin_all_blog')
    } else {
        return res.redirect('back')
    }


}

async function delete_blog(req, res) {
    const blog_id = req.query.blog_id;
    const result = await blogs.findOne({ where: { id: blog_id } })
    if (result) {
        result.destroy();
        return res.json({ message: "Blog Delete Successfully" })
    } else {
        return res.json({ message: "Something went wrong" })
    }

}
async function delete_subcategory(req, res) {
    const sub_category_id = req.query.sub_category_id;
    const result = await sub_categories.findOne({ where: { id: sub_category_id } })
    if (result) {
        result.destroy();
        return res.json({ message: "Blog Delete Successfully" })
    } else {
        return res.json({ message: "Something went wrong" })
    }

}


async function delete_testimonial(req, res) {
    const testimonial_id = req.query.testimonial_id;
    const result = await testimonials.findOne({ where: { id: testimonial_id } })
    if (result) {
        result.destroy();
        return res.json({ message: "Blog Delete Successfully" })
    } else {
        return res.json({ message: "Something went wrong" })
    }

}

async function update_testimonial(req, res) {

    const testimonial_id = req.body.testimonial_id;
    const result = await testimonials.findOne({
        where: {
            id: testimonial_id
        }
    })
    // return res.send(result);
    if (result) {
        result.name = req.body.name;
        result.comment = req.body.comment;
        if (req.file) {
            result.image = req.file.filename
        }
        result.save()
        req.flash('message', 'Testimonial Updated Successfully')
        return res.redirect('/admin_all_testimonial')
    } else {
        return res.redirect('back')
    }
}


async function update_sub_category(req, res) {
    // return res.send(req.body)
    const sub_category_id = req.body.sub_category_id;
    console.log(sub_category_id)
    const result = await sub_categories.findOne({
        where: { id: sub_category_id }
    })
    if (result) {
        result.category_id = req.body.categories_id
        result.sub_category = req.body.sub_category
        result.description = req.body.description
        result.save()
        req.flash('message', 'Sub Category updated successfully')
        return res.redirect('/admin_all_subcategories')
    } else {
        return res.redirect('back')
    }

}

async function delete_category(req, res) {
    const category_id = req.query.category_id;
    const result = await categories.findOne({
        where: {
            id: category_id,
        }
    })
    result.destroy()
    return res.json({ message: 'Category deleted successfully' })
}


async function update_category(req, res) {
    const category_id = req.body.category_id

    const result = await categories.findOne({
        where: {
            id: category_id
        }
    })
    if (result) {
        result.category = req.body.category
        result.description = req.body.description
        result.save()
        req.flash('success', 'Category Updated Successfully')
        return res.redirect('/admin_allcategories')
    } else {
        return res.redirect('back')
    }
}

async function admin_delete_product(req, res) {
    const product_id = req.query.product_id;
    const result = await products.findOne({
        where: {
            id: product_id
        }
    })
    result.destroy()
    return res.json({ success: "Deleted Successfully" })
}

module.exports = {
    admin_dashboard,
    admin_add_product,
    admin_all_orders,
    admin_products_table,

    admin_allcategories,
    admin_add_category,
    admin_all_subcategories,
    admin_add_subcategory,
    admin_all_banner,
    admin_add_banner,
    admin_all_testimonial,
    admin_add_testimonial,
    admin_all_blog,
    admin_add_blog,
    admin_contact_us, admin_all_users, invoice, insert_new_blog, insert_testimonial,
    update_blog_changes, delete_blog, delete_testimonial, update_testimonial
    , delete_subcategory, update_sub_category, delete_category, update_category, admin_delete_product

}