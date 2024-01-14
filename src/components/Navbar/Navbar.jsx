// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this points to the correct CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        {/* Assuming you have an image file for the Scout logo */}
        <img src="/path-to-scout-logo.png" alt="Scout Logo" className="navbar-logo" />
        Scout
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/pricing" className="navbar-link">Pricing</Link>
        <Link to="/about-us" className="navbar-link">About us</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login" className="navbar-link navbar-login">Log in</Link>
        <Link to="/signup" className="navbar-button signup-button">Sign up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
