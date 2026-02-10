const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Chúng ta sẽ tạo file config này sau

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Product;