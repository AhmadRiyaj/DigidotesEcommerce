const { sequelize, categories } = require('../models')

async function CreateNewCategory(req, res) {

    const category = req.body.category;
    const description = req.body.description;
    console.log(category, description)
    const result = await categories.create({ category, description })
    if (result) {
        req.flash('success', 'Category Created Successfully !')
        return res.redirect('/admin_allcategories')
    } else {
        req.flash('success', 'Somethin went wrong Please try again!')
        return res.redirect('/admin_allcategories')
    }
}

module.exports = { CreateNewCategory }