// server.js
const express = require('express');
const sequelize = require('./config/database');
const empRoutes = require('./routes/empRoutes');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

// Sync the database
sequelize.sync()
  .then(() => console.log('Database connected and tables created!'))
  .catch(err => console.error('Database connection error:', err));

// Use routes
app.use('/emp', empRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
