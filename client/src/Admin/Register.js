import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    empID: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !emailRegex.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.mobile || formData.mobile.length < 10) errors.mobile = 'Valid mobile number is required';
    if (!formData.empID) errors.empID = 'Employee ID is required';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Send a POST request to the registration API
        const response = await axios.post('http://localhost:5000/emp/register', formData);
        
        if (response.status === 200) {
          alert('Registration successful!');
          navigate('/'); // Navigate to the login page after successful registration
        }
      } catch (error) {
        alert('Failed to register. Please try again.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register New Employee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name<span style={styles.required}>*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.name && <span style={styles.error}>{formErrors.name}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Email<span style={styles.required}>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.email && <span style={styles.error}>{formErrors.email}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Mobile<span style={styles.required}>*</span></label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.mobile && <span style={styles.error}>{formErrors.mobile}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Employee ID<span style={styles.required}>*</span></label>
          <input
            type="text"
            name="empID"
            value={formData.empID}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.empID && <span style={styles.error}>{formErrors.empID}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Date of Birth<span style={styles.required}>*</span></label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.dob && <span style={styles.error}>{formErrors.dob}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Gender<span style={styles.required}>*</span></label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formErrors.gender && <span style={styles.error}>{formErrors.gender}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Password<span style={styles.required}>*</span></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.password && <span style={styles.error}>{formErrors.password}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>Confirm Password<span style={styles.required}>*</span></label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            style={styles.input}
          />
          {formErrors.confirmPassword && <span style={styles.error}>{formErrors.confirmPassword}</span>}
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  required: {
    color: 'red',
    marginLeft: '5px',
  },
};

export default Register;
