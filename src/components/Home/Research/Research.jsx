import React from 'react';
import './Research.css';

function Research() {
  return (
    <div className="search-container">
      <div className="search-graphics">
      <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
      <div className="search-content">
        <div className="search-header">
          <span className="search-tag">SEARCH</span>
          <h1>Search for Ingredients with Ease</h1>
        </div>
        <p>With Scout's powerful search, quickly look up any ingredient to instantly see matching pharmaceutical products and manufacturers.</p>
        <button className="search-button">Try now</button>
      </div>
    </div>
  );
}

export default Research;
