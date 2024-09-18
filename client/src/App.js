// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import UserRegister from './Users/Register';  // Rename Register from Users
import UserLogin from './Users/Login';  // Rename Login from Users
import Adminpage from './Adminpage';  // Adminpage component for redirection
import AdminRegister from './Admin/Register';  // Rename Register from Admin
import AdminLogin from './Admin/Login';  // Rename Login from Admin
//import SimType from './Admin/SimType';  // Admin SimType page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />

        {/* Route to redirect to admin login */}
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
       
      </Routes>
    </Router>
  );
}

export default App;
