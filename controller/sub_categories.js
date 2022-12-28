const { sequelize, sub_categories } = require('../models')

async function CreateNew_sub_Category(req, res) {
    const category_id = req.body.categories_id
    const sub_category = req.body.sub_category
    const description = req.body.description
    const result = await sub_categories.create({ category_id: category_id, description: description, sub_category: sub_category })
    if (result) {
        req.flash('success', 'Sub Category created Successfully')
        return res.redirect('/admin_all_subcategories')
    } else {
        req.flash('error', 'Something went wrong please try again!')
        return res.redirect('/admin_add_subcategory')
    }
}

async function get_sub_category(req, res) {
    console.log(req.body)
    const category_id = req.body.category_id;
    const response = await sub_categories.findAll({
        where: { category_id: category_id }
    })

    return res.json({ data: response })
}

module.exports = { CreateNew_sub_Category, get_sub_category }