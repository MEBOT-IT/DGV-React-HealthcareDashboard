import React, { useState } from 'react';
import './UPIPayment.css';
import SuccessPopup from './SuccessfulPopup';

const UpiPayment = () => {
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [isUpiIdValid, setIsUpiIdValid] = useState(true);
  const [isUpiPinValid, setIsUpiPinValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleUpiIdChange = (e) => {
    const value = e.target.value;
    setUpiId(value);
    setIsUpiIdValid(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]/.test(value));
  };

  const handleUpiPinChange = (e) => {
    const value = e.target.value;
    setUpiPin(value);
    setIsUpiPinValid(/^\d{4}$/.test(value));
  };

  const handlePayClick = () => {
    setIsFormSubmitted(true);

    if (isUpiIdValid && isUpiPinValid) {
      setIsPaymentSuccessful(true);
    }
  };

  const handlePopupClose = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <div className="upi-payment">
      <input type="text" placeholder="UPI ID" value={upiId} onChange={handleUpiIdChange} />
      {!isUpiIdValid && isFormSubmitted && <span className="error">Invalid UPI ID</span>}
      <input type="password" placeholder="UPI PIN" value={upiPin} onChange={handleUpiPinChange} />
      {!isUpiPinValid && isFormSubmitted && <span className="error">Invalid UPI PIN</span>}
      <button onClick={handlePayClick}>Pay</button>

      {isPaymentSuccessful && <SuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default UpiPayment;