const express = require('express');
const multer = require('multer');
const app = express.Router();
const { admin_dashboard,
    admin_all_orders,
    admin_products_table,
    admin_add_product,
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
    admin_contact_us, admin_all_users, invoice,
    insert_new_blog, insert_testimonial, delete_testimonial, update_testimonial,
    update_blog_changes, delete_blog, delete_subcategory, update_sub_category, delete_category,
    update_category, admin_delete_product

} = require('../controller/admin')


const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
const upload = multer({ storage: storage });

app.get('/admin_dashboard', admin_dashboard)
app.get('/admin_all_orders', admin_all_orders)
app.get('/admin_products_table', admin_products_table)
app.get('/admin_add_product', admin_add_product)
app.get('/admin_allcategories', admin_allcategories)
app.get('/admin_add_category', admin_add_category)
app.get('/admin_all_subcategories', admin_all_subcategories)
app.get('/admin_add_subcategory', admin_add_subcategory)
app.get('/admin_all_banner', admin_all_banner)
app.get('/admin_add_banner', admin_add_banner)
app.get('/admin_all_testimonial', admin_all_testimonial)
app.get('/admin_add_testimonial', admin_add_testimonial)
app.get('/admin_all_blog', admin_all_blog)
app.get('/admin_add_blog', admin_add_blog)
app.get('/admin_contact_us', admin_contact_us)
app.get('/admin_all_users', admin_all_users)
app.get('/invoice', invoice)


app.post('/insert_new_blog', upload.single('image'), insert_new_blog)
app.post('/insert_testimonial', upload.single('image'), insert_testimonial)
app.post('/update_blog_changes', upload.single('image'), update_blog_changes)
app.get('/delete_blog', delete_blog)
app.get('/delete_testimonial', delete_testimonial)

app.post('/update_testimonial', upload.single('image'), update_testimonial)
app.get('/delete_subcategory', delete_subcategory)
app.post('/update_sub_category', update_sub_category)
app.get('/delete_category', delete_category)

app.get('/admin_delete_product', admin_delete_product)
app.post('/update_category', update_category)



module.exports = { AdminRoute: app }