import React, { useContext } from 'react';
import './Orders.css';
import { StoreContext } from '../../context/StoreContext';


const Orders = () => {
  const { orders } = useContext(StoreContext);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <h2>Order #{order.id}</h2>
              <p><b>Date:</b> {order.date}</p>
              <p><b>Total:</b> ₹{order.totalAmount}</p>
              
              <div className="delivery-info">
                <h3>Delivery Information:</h3>
                <p>{order.deliveryInfo.firstName} {order.deliveryInfo.lastName}</p>
                <p>{order.deliveryInfo.street}, {order.deliveryInfo.city}, {order.deliveryInfo.state}, {order.deliveryInfo.pinCode}, {order.deliveryInfo.country}</p>
                <p>Email: {order.deliveryInfo.email}</p>
                <p>Phone: {order.deliveryInfo.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
