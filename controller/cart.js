const { sequelize } = require('../models')


async function DeleteCart(req, res) {
    const product_id = req.body.product_id;
    var cart = req.session.cart;
    cart.forEach(element => {
        console.log("Before delete " + element.product_id)
        if (element.product_id === product_id) {
            delete element.product_id;
        }
    });
    return res.json({ success: "Cart Item Delete successfully" })
}

async function AddtoCart(req, res) {
    const product_id = req.body.product_id
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push({
        "product_id": product_id
    });
    console.log("My cart is " + req.session.cart, typeof req.session.cart);
    res.json({ message: " Product added to cart " })
}

async function GetAllCart(req, res) {
    var cart = req.session.cart;
    var all_cart_products = [];
    var total_cart_price = 0;
    var all_cart_images = [];
    for (let i = 0; i < cart.length; i++) {
        await sequelize.query("SELECT * FROM products WHERE id='" + cart[i].product_id + "'").then(function (result) {
            all_cart_products.push(result[0]);
            all_cart_images.push(JSON.parse(all_cart_products[i][0].product_images))
            total_cart_price += parseInt(result[0][0].product_price);
        })
    }
    // return res.send(all_cart_products)
    return res.render('cart', { req: req, res: res, all_cart_products: all_cart_products, total_cart_price: total_cart_price, all_cart_images: all_cart_images })

}

module.exports = { AddtoCart, DeleteCart, GetAllCart }