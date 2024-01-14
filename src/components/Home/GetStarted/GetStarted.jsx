// GetStarted.js
import React from 'react';
import './GetStarted.css'; // Import the CSS file for styling

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="gs-text-content">
        <h1>Get started with Scout today</h1>
        <p>Find companies using your ingredients and connect with their decision makers.</p>
        <button className="signup-button">Sign up now</button>
      </div>
      <div className="gs-image-placeholder">
      <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
      
    </div>
  );
};

export default GetStarted;
