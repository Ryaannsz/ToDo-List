const sequelize = require('sequelize')

const dbConnection = require('./db')


    const Data = dbConnection.define("users", {
        id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        list: {
            type: sequelize.DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: sequelize.DataTypes.DATE,
            allowNull: false    
        },
        updatedAt: {
            type: sequelize.DataTypes.DATE,
            allowNull: false
        }
    })
    Data.sync()
    module.exports = Data