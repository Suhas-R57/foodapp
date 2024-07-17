import React from 'react';
import { useLocation } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = () => {
  const location = useLocation();
  const { foodDetails } = location.state || {};

  if (!foodDetails) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="food-item-calorie">
      <h1 >{foodDetails.name} has a total of <span className="calories">{foodDetails.calories} Calories</span></h1>
      <div className="content">
        <div className="nutritional-values">
          <h2>Nutritional Values</h2>
          <table>
            <tbody>
              <tr>
                <td>Carbohydrates:</td>
                <td>{foodDetails.carbohydrates_total_g} g</td>
              </tr>
              <tr>
                <td>Cholesterol:</td>
                <td>{foodDetails.cholesterol_mg} mg</td>
              </tr>
              <tr>
                <td>Saturated Fat:</td>
                <td>{foodDetails.fat_saturated_g} g</td>
              </tr>
              <tr>
                <td>Total Fat:</td>
                <td>{foodDetails.fat_total_g} g</td>
              </tr>
              <tr>
                <td>Fiber:</td>
                <td>{foodDetails.fiber_g} g</td>
              </tr>
              <tr>
                <td>Potassium:</td>
                <td>{foodDetails.potassium_mg} mg</td>
              </tr>
              <tr>
                <td>Protein:</td>
                <td>{foodDetails.protein_g} g</td>
              </tr>
              <tr>
                <td>Sodium:</td>
                <td>{foodDetails.sodium_mg} mg</td>
              </tr>
              <tr>
                <td>Sugar:</td>
                <td>{foodDetails.sugar_g} g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="exercise-info">
          <h2>To burn {foodDetails.calories} calories you will have to:</h2>
          <ul>
            {foodDetails.exercises.map((exercise) => (
              <li key={exercise.name}>
                <img src={`/images/${exercise.name1.toLowerCase().replace(/ /g, '_')}.png`} alt={exercise.name} />
               <b> {exercise.name} for <span className='span'>{exercise.duration}</span></b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
