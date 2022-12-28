'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_title: {
        type: Sequelize.STRING
      },
      product_additional_information: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.STRING
      },
      product_quantity: {
        type: Sequelize.STRING
      },
      product_images: {
        type: Sequelize.TEXT
      },
      product_category_id: {
        type: Sequelize.STRING
      },
      product_sub_category_id: {
        type: Sequelize.STRING
      },
      meta_title: {
        type: Sequelize.STRING
      },
      meta_description: {
        type: Sequelize.STRING
      },
      meta_keywords: {
        type: Sequelize.STRING
      },
      hash_tags: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};