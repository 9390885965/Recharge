import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Mobile Recharge Center</h1>
      <p style={styles.paragraph}>To get started, please register or log in.</p>
      <div style={styles.buttonContainer}>
        <Link to="/register">
          <button style={styles.button}>Register</button>
        </Link>
      </div>
      <div style={styles.buttonContainer}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
      </div>
      <Link to="/admin" style={styles.adminLink}>
        <button style={styles.adminButton}>Admin</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '20px',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
  },
  buttonContainer: {
    marginBottom: '20px', // Add margin between buttons
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  adminLink: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  adminButton: {
    padding: '10px 20px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WelcomePage;
