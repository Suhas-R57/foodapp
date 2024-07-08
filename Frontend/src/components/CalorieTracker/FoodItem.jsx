// src/pages/FoodCalorie/FoodItemCalorie.jsx
import React from 'react';
import './FoodItem.css';
import { useParams } from 'react-router-dom';
import { foodData } from '../../assets/FoodCalorie';


const FoodItem = () => {
  const { id } = useParams();
  const foodItem = foodData.find(item => item.id === parseInt(id));

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="FoodItemCalorie">
      <h1>{foodItem.name} has a total of <span className="calories">{foodItem.calories} Calories</span></h1>
      <div className="nutritional-values">
        <h2>Nutritional Values</h2>
        <table>
          <tbody>
            {Object.keys(foodItem.nutritionalValues).map((key) => (
              <tr key={key}>
                <td>{key}:</td>
                <td>{foodItem.nutritionalValues[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="exercise-info">
        <h2>To burn {foodItem.calories} calories you will have to:</h2>
        <ul>
          {foodItem.exercises.map((exercise) => (
            <li key={exercise.name}>
              <img src={exercise.image} alt={exercise.name} />
              {exercise.name} for {exercise.duration}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodItem;
