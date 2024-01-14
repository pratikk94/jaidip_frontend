// Page.js
import React from 'react';
import './Discover.css'; // Make sure this imports the CSS file

const Discover = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="header">SEE PRODUCTS, CUSTOMERS</div>
        <h1>Discover Companies Using Your Ingredients</h1>
        <p>Scout's search results reveal the manufacturers and products actively using your ingredients so you instantly see ideal prospects.</p>
        <button className="try-now-button">Try now</button>
      </div>
      <div className="image-placeholder">
        <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
    </div>
  );
};

export default Discover;
