const { users } = require('../models')

async function CheckduplicateEmailAndContact_no(req, res, next) {
    const email = req.body.email;
    const contact_no = req.body.contact_no;
    const dulicateemail = await users.findOne({ where: { email: email } })
    if (dulicateemail) {
        console.log("Email already exists")
        req.flash("error", "Email already exists")
        return res.redirect('/signup_page')
    }
    const dulicatecontact = await users.findOne({ where: { contact_no: contact_no } })
    if (dulicatecontact) {
        console.log("Contact no. already exists")
        req.flash("error", "Contact no. already exists")
        return res.redirect('/signup_page')
    }
    next();

}
async function isAdmin(req, res, next) {
    const user = await users.findOne(
        {
            where: {
                email: req.body.email,
            }
        }
    )
    if (user.is_admin === "yes") {
        next();
    }
    req.flash("error", "You must be an administrator")
    return res.redirect('/')

}


async function isLoggedIn(req, res, next) {
    if (!req.session.user_id) {
        req.flash('error', 'Please Login First');
        return res.redirect("/signup_page")
    }
    next();
}

module.exports = { isLoggedIn, CheckduplicateEmailAndContact_no,isAdmin }