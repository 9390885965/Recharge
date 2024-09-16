// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

// Register function
exports.register = async (req, res) => {
  const { name, email, mobile, emp_id, dob, gender, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    // Check if employee ID already exists
    let employee = await Employee.findOne({ where: { emp_id } });
    if (employee) return res.status(400).json({ error: "Employee ID already exists" });

    // Check if email already exists
    employee = await Employee.findOne({ where: { email } });
    if (employee) return res.status(400).json({ error: "Email already registered" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employee
    const newEmployee = await Employee.create({
      name,
      email,
      mobile,
      emp_id,
      dob,
      gender,
      password: hashedPassword,
      confirm_password: hashedPassword,
    });

    res.status(201).json({ message: "Employee registered successfully", employee: newEmployee });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login function
exports.login = async (req, res) => {
  const { emp_id, password } = req.body;

  try {
    const employee = await Employee.findOne({ where: { emp_id } });
    if (!employee) return res.status(400).json({ error: "Invalid Employee ID or password" });

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid Employee ID or password" });

    const token = jwt.sign({ id: employee.id, emp_id: employee.emp_id }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
