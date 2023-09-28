import React from 'react';
import './Invalidinput.css';
const InvalidInput = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Invalid Input</h2>
        <p>Your username or password is invalid.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default InvalidInput;