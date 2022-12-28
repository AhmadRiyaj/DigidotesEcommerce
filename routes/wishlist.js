const express = require('express')

const app = express.Router();

const { add_to_wishlist, wishlist, delete_wishlist_products } = require('../controller/wishlist')
const { isLoggedIn } = require('../middleware/auth')
app.get('/add_to_wishlist', [isLoggedIn], add_to_wishlist)
app.get('/wishlist', [isLoggedIn], wishlist)

app.post('/delete_wishlist_products', delete_wishlist_products);


module.exports = { WishlistRoute: app }