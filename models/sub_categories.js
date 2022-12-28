'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sub_categories.init({
    sub_category: DataTypes.STRING,
    category_id: DataTypes.STRING,

    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sub_categories',
  });
  return sub_categories;
};