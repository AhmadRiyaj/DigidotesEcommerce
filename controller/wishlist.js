const { sequelize, wishlists, products } = require('../models')

async function add_to_wishlist(req, res) {
    const product_id = req.query.product_id;
    const user_id = req.session.user_id;
    console.log(product_id, user_id)
    const result = await wishlists.create({ product_id, user_id })
    if (result) {
        return res.send({ response: "Added to wishlist" });
    } else {
        return res.send({ response: "Something went wrong,please try again later!" });
    }
}

async function wishlist(req, res) {
    var id = req.session.user_id;
    var all_wishlist_products = [];
    var all_wishlist_product_images = [];

    const wishlist = await wishlists.findAll({
        where: { user_id: id },
    });
    for (let i = 0; i < wishlist.length; i++) {
        const result = await products.findOne({
            where: {
                id: wishlist[i].product_id
            }
        })
        all_wishlist_products.push(result);
        all_wishlist_product_images.push(JSON.parse(result.product_images));
    }
    // return res.send(all_wishlist_products[0].product_price)
    return res.render('wishlist', { req: req, res: res, wishlist: wishlist, all_wishlist_products: all_wishlist_products, all_wishlist_product_images: all_wishlist_product_images })
}

async function delete_wishlist_products(req, res) {
    const user_id = req.session.user_id
    const product_id = req.body.product_id;
    const result = await wishlists.findOne({
        where: {
            product_id: product_id,
            user_id: user_id
        }
    })
    if (result) {
        result.destroy();
        res.json({ message: "Deleted Successfully" })
    } else {
        res.json({ message: "Could Not Delete Try Again !" })

    }
}


module.exports = { add_to_wishlist, wishlist, delete_wishlist_products }