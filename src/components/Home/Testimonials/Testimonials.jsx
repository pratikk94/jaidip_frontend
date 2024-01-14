// Testimonials.js
import React from 'react';
import './Testimonials.css'; // This will import the CSS file for styling
import StarRatings from '../../CustomComponents/StarRating/StarRatings';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <p className="subtitle">People love what we do and we want to let your know</p>
      <div className="cards-container">
        <div className="card">
          <p className="testimonial-text">"Found 20+ new qualified prospects instantly."</p>
          <div className="rating">
           <StarRatings />
          </div>
          <p className="author">Umang Mehta</p>
          <p className="role">Director, Ujin Pharmachem</p>
        </div>

        <div className="card">
          <p className="testimonial-text">"Cut prospecting time from hours to minutes."</p>
          <div className="rating">
            <StarRatings />
          </div>
          <p className="author">Jinesh Sheth</p>
          <p className="role">Director, Ujin Pharmachem</p>
        </div>

        <div className="card">
          <p className="testimonial-text">"Doubled sales productivity, closed 30% more deals."</p>
          <div className="rating">
            <StarRatings />
          </div>
          <p className="author">Prasanna Mainkar</p>
          <p className="role">Partner, Nutrivise</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
