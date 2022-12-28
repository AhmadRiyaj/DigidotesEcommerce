const express = require('express');
const router = express.Router();
const { CreateNew_sub_Category, get_sub_category } = require('../controller/sub_categories')

router.post('/insert_sub_category', CreateNew_sub_Category)
router.post('/get_sub_category', get_sub_category)


module.exports = { SubcategoryRoute: router }