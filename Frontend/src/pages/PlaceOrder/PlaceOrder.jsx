import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, setOrders } = useContext(StoreContext);
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value
    });
  };

  const isDeliveryInfoFilled = () => {
    return Object.values(deliveryInfo).every((info) => info.trim() !== '');
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (isDeliveryInfoFilled()) {
      const newOrder = {
        id: Date.now(),  // Unique ID for the order
        items: cartItems,
        deliveryInfo,
        totalAmount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 50),
        date: new Date().toLocaleString(),
      };
      
      setOrders(prevOrders => [...prevOrders, newOrder]);  // Save the order
      setAlertMessage('Order confirmed \nThank you for ordering!');
      setAlertType('success');
    } else {
      setAlertMessage('Please fill in all delivery information');
      setAlertType('error');
    }
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" name="firstName" placeholder='First Name' onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder='Last Name' onChange={handleInputChange} />
          </div>
          <input type="text" name="email" placeholder='Email address' onChange={handleInputChange} />
          <input type="text" name="street" placeholder='Street' onChange={handleInputChange} />
          <div className="multi-fields">
            <input type="text" name="city" placeholder='City' onChange={handleInputChange} />
            <input type="text" name="state" placeholder='State' onChange={handleInputChange} />
          </div>
          <div className="multi-fields">
            <input type="text" name="pinCode" placeholder='Pin Code' onChange={handleInputChange} />
            <input type="text" name="country" placeholder='Country' onChange={handleInputChange} />
          </div>
          <input type="text" name="phone" placeholder='Phone' onChange={handleInputChange} />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
              </div>
            </div>
            <button onClick={handleProceedToPayment}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
      {alertMessage && (
        <div className={`alert-box ${alertType === 'success' ? 'success' : 'error'} show`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
