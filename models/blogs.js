'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogs.init({
    title: DataTypes.STRING,
    heading: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_alt_tag: DataTypes.STRING,
    meta_title: DataTypes.STRING,
    meta_description: DataTypes.STRING,
    meta_keyword: DataTypes.STRING,
    hash_tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};