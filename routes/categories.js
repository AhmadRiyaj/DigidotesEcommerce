const { sequelize, users, wishlists, products, categories } = require('../models');
const { CreateNewCategory } = require('../controller/categories')
const express = require('express')
const router = express.Router();

router.post('/insert_new_category', CreateNewCategory)


module.exports = { CategoryRoute: router }