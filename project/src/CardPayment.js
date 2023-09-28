import React, { useState } from 'react';
import './CardPayment.css';
import SuccessPopup from './SuccessfulPopup';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isCardNumberValid, setIsCardNumberValid] = useState(true);
  const [isPinValid, setIsPinValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    setIsCardNumberValid(/^\d{16}$/.test(value));
  };

  const handlePinChange = (e) => {
    const value = e.target.value;
    setPin(value);
    setIsPinValid(/^\d{4}$/.test(value));
  };

  const handlePayClick = () => {
    setIsFormSubmitted(true);

    if (isCardNumberValid && isPinValid) {
      setIsPaymentSuccessful(true);
    }
  };

  const handlePopupClose = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <div className="card-payment">
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      {!isCardNumberValid && isFormSubmitted && <span className="error">Invalid card number</span>}
      <input type="password" placeholder="PIN" value={pin} onChange={handlePinChange} />
      {!isPinValid && isFormSubmitted && <span className="error">Invalid PIN</span>}
      <button onClick={handlePayClick}>Pay</button>

      {isPaymentSuccessful && <SuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default CardPayment;