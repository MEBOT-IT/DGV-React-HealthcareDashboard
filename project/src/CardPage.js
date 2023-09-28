

import React, { useState } from 'react';
import Payment from './Payment'; 
import './cardpage.css'
const CartPage = ({ cart, removeFromCart }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [confirmedPayment, setConfirmedPayment] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');
  const [isOnlinePaymentOpen, setIsOnlinePaymentOpen] = useState(false);

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.MRP * item.quantity, 0);
  };

  const handlePayment = () => {
    if (selectedPaymentMethod === 'cod') {
      setPaymentStatus('success');
    } else if (selectedPaymentMethod === 'online') {
      setTimeout(() => {
        setPaymentStatus('success');
      }, 2000);
    }
  };

  const handleConfirmPayment = () => {
    setConfirmedPayment(true);
  };

  const handleOnlinePayment = () => {
    setIsOnlinePaymentOpen(true);
  };

  return (
    <div className="cart">
      <h2>Medicine Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} width="100" height="100" />
            <div>
              {item.Name} - MRP: {item.MRP} (Quantity: {item.quantity})
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-amount">
        Total Amount: ${calculateTotalAmount()}
      </div>
      
      {confirmedPayment && (
        <div className="payment-confirmed-popup">
          <p>Your payment has been confirmed.</p>
          <span role="img" aria-label="Checkmark">✅</span>
        </div>
      )}

      {!paymentStatus && !confirmedPayment && (
        <button onClick={handlePayment}>Proceed to Payment</button>
      )}
      
      {paymentStatus === 'success' && !confirmedPayment && (
        <button onClick={handleConfirmPayment}>
          {selectedPaymentMethod === 'cod' ? 'Payment Successful' : 'Confirm Payment'}
        </button>
      )}

      {paymentStatus === 'success' && !confirmedPayment && (
        
        <button onClick={handleOnlinePayment}>Online Payment</button>
      )}

      {isOnlinePaymentOpen &&  <Payment />}
    </div>
  );
};

export default CartPage;