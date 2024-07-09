// FoodItem.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price,calorie, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewCalorie = () => {
    navigate(`/calorie/${id}`); // Navigate to the individual calorie page
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ?
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" /> :
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
        <p className="food-item-calorie">{calorie}g</p>
        <button className="view-calorie-button" onClick={handleViewCalorie}>
          View Calorie
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
