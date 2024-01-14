// Connect.js
import React from 'react';
import './Connect.css'; // This will import the CSS file for styling

const Connect = () => {
  return (
    <div className="container">
      <div className="connect_image-placeholder">
        <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
      <div className="text-content">
        <div className="header">FIND DECISION MAKERS</div>
        <h1>Connect With the Contacts You Need</h1>
        <p>Easily access key decision makers like R&D and procurement managers at your identified prospect companies right within Scout.</p>
        <button className="try-now-button">Try now</button>
      </div>
    </div>
  );
};

export default Connect;
