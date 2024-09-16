import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [empID, setEmpID] = useState('');
  const [password, setPassword] = useState('');
  const [empIDError, setEmpIDError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate empID and password
    if (empID === '') {
      setEmpIDError(true);
    } else {
      setEmpIDError(false);
    }

    if (password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Proceed to login only if both empID and password are provided
    if (empID && password) {
      try {
        // Send a POST request to the login API
        const response = await axios.post('http://localhost:5000/emp/login', { empID, password });

        if (response.status === 200) {
          alert('Login successful');
          navigate('/SimType'); // Navigate to SimType page upon successful login
        }
      } catch (error) {
        alert('Login failed. Please check your credentials.');
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div style={styles.container}>
      <h2>Employee Login</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="empID">
            Employee ID <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="empID"
            value={empID}
            onChange={(e) => setEmpID(e.target.value)}
            placeholder="Enter Employee ID"
            style={styles.input}
          />
          {empIDError && <span style={styles.error}>Employee ID is required</span>}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">
            Password <span style={styles.required}>*</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            style={styles.input}
          />
          {passwordError && <span style={styles.error}>Password is required</span>}
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          <button onClick={handleRegister} style={styles.button}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
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
  required: {
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
