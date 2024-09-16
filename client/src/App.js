import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Admin/Login'; // Import the LoginForm component
import Register from './Admin/Register'; // Import a new RegisterPage component
import SimType from './Admin/SimType';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SimType" element={<SimType />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
