// models/Employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Employee model
const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emp_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirm_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'employees', // Optional: to explicitly define table name
  timestamps: false,
});

module.exports = Employee;
