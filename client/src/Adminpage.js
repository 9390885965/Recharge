import { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Adminpage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if the current path is exactly /admin, if so redirect to /admin/login
    if (location.pathname === '/admin') {
      navigate('/admin/login');
    }
  }, [navigate, location]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/register">
        <button>Register</button>
      </Link>
      <Link to="/admin/login">
        <button>Login</button>
      </Link>
     
    </div>
  );
};

export default Adminpage;
