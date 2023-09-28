import React, { useState } from 'react';
import CardPayment from './CardPayment';
import UPIPayment from './UPIPayment';
import './PaymentPage.css';


const PaymentPage = ({ onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSuccess = (hasRequiredInputs) => {
    if (hasRequiredInputs) {
      setIsPaymentSuccessful(true);
      setPaymentMethod(null); 
    } else {
      alert('Please enter the required information for the payment.');
    }
  };

  const handlePopupClose = () => {
    setIsPaymentSuccessful(false);
    onClose(); // Close the modal
  };

  return (
    <div className="payment-container">
      <h6>Choose Payment Method</h6>
      <button onClick={() => handlePaymentMethodSelect('card')}>Pay with Debit/Credit Card</button>
      <button onClick={() => handlePaymentMethodSelect('upi')}>Pay with UPI</button>

      {paymentMethod === 'card' && <CardPayment onPaymentSuccess={handlePaymentSuccess} />}
      {paymentMethod === 'upi' && <UPIPayment onPaymentSuccess={handlePaymentSuccess} />}

    
    </div>
  );
};

export default PaymentPage;