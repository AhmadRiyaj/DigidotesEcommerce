const express = require('express');
const route = express.Router();
const { isLoggedIn, isAdmin } = require('../middleware/auth')
const { CreateProducts, update_product, GetProductById, GetAllProducts, DeleteProduct, UpdateProduct, ProductCategory } = require('../controller/products')
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
route.post('/CreateProducts', upload.array('product_images', 12), CreateProducts);

route.get('/product_category', ProductCategory)
route.get('/allproducts', GetAllProducts)
route.get('/product_detail', GetProductById)

route.post('/update_product', upload.array('product_images', 12), update_product)

route.get('/GetProductById', GetProductById)
module.exports = { Productroute: route };