import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const FoodItem = ({ id, name, price, calorie, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleViewCalorie = async () => {
    setLoading(true);
    try {
      const query = name;
      const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
        headers: { 'X-Api-Key': 'WDMuPc3Jh8bDEtUFTXw2KA==V756WLwROeXUef6f' },
      });
  
      if (response.data.items && response.data.items.length > 0) {
        const foodDetails = response.data.items[0];
        foodDetails.exercises = [
          { name: "Jog",name1:"jog", duration: "22 Minutes", image: "/images/jog.png" },
          { name: "Do Power Yoga",name1:"power yoga", duration: "20 Minutes", image: "/images/power_yoga.png" },
          { name: "Get a Gym Workout",name1:"gym workout", duration: "18 Minutes", image: "/images/gym_workout.png" },
          { name: "Go for a Brisk Walk",name1:"brisk walk", duration: "33 Minutes", image: "/images/brisk_walk.png" }
        ];
        navigate(`/calorie/${name}`, { state: { foodDetails } });
      }
    } catch (error) {
      console.error('Error fetching calorie data:', error);
    }
  };
  

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url + "/images/" + image} alt={name} />
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
        {/* <p className="food-item-calorie">{calorie}</p> */}
        <button className="view-calorie-button" onClick={handleViewCalorie} disabled={loading}>
        {loading ? 'Loading...' : 'View Calorie'}
        </button>
      </div>
    </div>
  );
};

export default FoodItem;


// 
// apiKey WDMuPc3Jh8bDEtUFTXw2KA==V756WLwROeXUef6f
//  <button className="view-calorie-button" onClick={handleViewCalorie}>
//           View Calorie
//         </button> 