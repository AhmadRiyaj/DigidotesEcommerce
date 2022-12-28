'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  products.init({
    product_name: DataTypes.STRING,
    product_title: DataTypes.STRING,
    product_additional_information: DataTypes.STRING,
    product_price: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_quantity: DataTypes.STRING,
    product_images: DataTypes.TEXT,
    product_category_id: DataTypes.STRING,
    product_sub_category_id: DataTypes.STRING,
    meta_title: DataTypes.STRING,
    meta_description: DataTypes.STRING,
    meta_keywords: DataTypes.STRING,
    hash_tags: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};