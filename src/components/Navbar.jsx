import React from 'react';
import './Navbar.css'; // Link to your CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Replace src with the path to your actual logo */}
        <img src="/path-to-your-logo.png" alt="Scout Logo" className="logo-image" />
        <span className="logo-text">Scout</span>
      </div>
      <div className="nav-links">
        <a href="#home" className="nav-item">Home</a>
        <a href="#pricing" className="nav-item">Pricing</a>
        <a href="#about" className="nav-item">About us</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
      <div className="nav-buttons">
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
