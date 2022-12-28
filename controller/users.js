const { sequelize, users, wishlists } = require('../models')
const bcrypt = require('bcrypt')

async function signup_page(req, res) {
    return res.render("login", { message: req.flash('error'), req: req, res: res })
}

async function SignUp(req, res) {

    const name = req.body.name
    const email = req.body.email
    const contact_no = req.body.contact_no
    const password = bcrypt.hashSync(req.body.password, 8)
    const result = await users.create({ name, email, contact_no, password })
    if (result) {
        return res.redirect('/')
    } else {
        req.flash('error', "Something went wrong please try again.")
        return res.redirect('/signup_page')
    }
}

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password
    const result = await users.findOne({
        where: {
            email: email,
        }
    })
    var user_id = result.id;
    if (result) {
        const validpassword = await bcrypt.compare(password, result.password)
        if (validpassword) {
            req.session.user_id = user_id;
            if (result.is_admin === 'yes') {
                return res.redirect('/admin_dashboard')
            }
            return res.redirect('/dashboard')
        } else {
            return res.send("Password does not match")
        }
    } else {
        return res.send("Please enter a valid Email")
    }
}

async function logout(req, res) {
    req.session.destroy();
    return res.redirect("/");
}

async function dashboard(req, res) {
    var id = req.session.user_id;
    const wishlist = await wishlists.findAll({
        where: { user_id: id },
    });
    return res.render("dashboard", { req: req, res: res, wishlist: wishlist })
}

async function get_allusers(req, res) {
    const result = await users.findAll();
    return res.send(result);
}
module.exports = { SignUp, login, signup_page, dashboard, logout, get_allusers }