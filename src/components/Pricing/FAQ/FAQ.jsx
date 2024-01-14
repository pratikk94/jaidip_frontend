// FAQ.jsx
import React from 'react';
import './FAQ.css'; // Ensure this is the correct path to your CSS file

const FAQ = () => {
  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-questions">
        {/* Each question will be a button or a div that can be clicked to reveal the answer. */}
        <div className="faq-question">Is Scout easy to use?</div>
        <div className="faq-question">How can Scout help my specific company?</div>
        <div className="faq-question">Is my data secure on Scout?</div>
        <div className="faq-question">Does Scout integrate with my CRM?</div>
        <div className="faq-question">What pharmaceutical data does Scout offer?</div>
        <div className="faq-question">How much time will Scout save me?</div>
        {/* Add onClick handlers to reveal answers when questions are clicked */}
      </div>
    </div>
  );
};

export default FAQ;
