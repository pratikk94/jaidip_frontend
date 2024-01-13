// Hero.jsx
import React from 'react';
import './HeroSection.css'; // Make sure the path to your CSS file is correct
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="free-trial">FREE 30 DAYS TRIAL</span>
        <h1 className="hero-heading">Identify Your Ideal Customers in Seconds</h1>
        <p className="hero-subheading">
          With Scout, quickly find companies using your ingredients and connect with the decision makers you need.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Try for free</button>
          <button className="btn btn-secondary">See how it works</button>
        </div>
        <p className="hero-footer">Connect with decision makers at India's top pharmaceutical companies</p>
      </div>
      <div className="hero-image">
        {/* Placeholder for the image. Replace 'path-to-image' with your actual image path */}
        <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
    </section>
  );
};

export default HeroSection;
