// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="branding">
          <h2>Scout</h2>
          <p>2024 © Scout</p>
          <p>All rights reserved.</p>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
