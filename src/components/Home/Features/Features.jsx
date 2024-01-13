// Section.jsx
import React from 'react';
import './Features.css'; // Ensure this points to the correct path of your CSS file

const Features = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="f_hero-image">
          <img src="../images/main.png" alt="Abstract shapes and smartphone" />
        </div>
        <h1>Tired of Searching Everywhere to Find Customers?</h1>
        <p>We get it - trying to find potential customers without Scout is no fun and takes way too long.</p>
        <button>Sign up now</button>
      </div>
      <div className="right-section">
        <h2>Is this you?</h2>
        <ul>
          <li>Searching the same keywords over and over on IndiaMart, PharmEasy, and other sites seems like a waste of time.</li>
          <li>Buying random lists of companies without knowing if they really use your ingredients? Not very useful.</li>
          <li>All the time spent on searching means less time actually talking to and selling to the right people.</li>
          <li>The uncertainty of whether you'll actually find good potential customers can feel irritating.</li>
          <li>There has to be an easier way than this tiring process of searching everywhere.</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
