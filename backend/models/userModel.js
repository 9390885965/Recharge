const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmPassword: {
        type: DataTypes.VIRTUAL, // This field won't be stored in DB
        allowNull: false,
        validate: {
            isEqual(value) {
                if (value !== this.password) {
                    throw new Error('Passwords do not match!');
                }
            },
        },
    },
}, {
    tableName: 'Users1',  // Explicitly setting the table name
    timestamps: true,
});

module.exports = User;
