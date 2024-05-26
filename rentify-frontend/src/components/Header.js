import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // alert("See u Soon!");
    window.location.reload();
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link to="/">Rentify</Link></h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/properties" className="mr-4">Properties</Link>
        {localStorage.getItem('token') ? (
          <>
            <Link to="/post-property" className="mr-4">Post Property</Link>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="mr-4">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
