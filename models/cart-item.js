const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('CartItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: DataTypes.INTEGER
});


module.exports = CartItem;