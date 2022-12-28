const express = require('express')
const app = express.Router();
const { AddtoCart, DeleteCart, GetAllCart } = require('../controller/cart')


app.post('/add_to_cart', AddtoCart)
app.post('/DeleteCart', DeleteCart)

app.get('/GetAllCart', GetAllCart)



module.exports = { CartRoute: app }