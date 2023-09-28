
import React from 'react';
import './SuccessfulPopup.css';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Payment Successful</h2>
        <p>Your payment was successful!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default SuccessPopup;