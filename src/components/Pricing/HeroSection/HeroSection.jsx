// HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Ensure this is the correct path to your CSS file

const HeroSection = () => {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <p className="description">Our pricing is not expensive, but it's not cheap either; it's exactly what it should be</p>
      <div className="card-container">
        <div className="card basic">
          <h2>Basic</h2>
          <p className="price"><span>$9/month</span></p>
          <p>For individuals and small teams</p>
          <button>Get Started with Basic</button>
        </div>

        <div className="card pro">
          <h2>Pro</h2>
          <p className="price"><span>$19/month</span></p>
          <p>For startups and growing businesses</p>
          <button className="btn-highlight">Get Started with Pro</button>
          <div className="badge">Most Popular</div>
        </div>

        <div className="card business">
          <h2>Business</h2>
          <p className="price"><span>$99/month</span></p>
          <p>For organizations with advanced needs</p>
          <button>Get Started with Business</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
