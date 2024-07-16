import React, { useState } from 'react';
import axios from 'axios';
import './NutritionInfo.css';

const NutritionInfo = () => {
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFood(e.target.value);
  };

  const fetchNutritionData = () => {
    const query = food;
    axios({
      method: 'GET',
      url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
      headers: { 'X-Api-Key': '4uf960ulsGDxuHrR+Zq1Wg==EZLNSRmna4V60lZE' },
    })
      .then((response) => {
        setNutrition(response.data.items);
        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : 'Error fetching data');
        setNutrition(null);
      });
  };

  return (
    <div className='box'>
    <div className="container">
      <h1>Nutrition Info</h1>
      <input
        type="text"
        value={food}
        onChange={handleInputChange}
        placeholder="Enter food name"
      />
      <button onClick={fetchNutritionData}>Get Nutrition Info</button>

      {error && <p className="error">{error}</p>}

      {nutrition && (
        <div>
          {nutrition.map((item, index) => (
            <div key={index} className="nutrition-item">
              <h2>{item.name}</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Calories:</td>
                    <td>{item.calories}</td>
                  </tr>
                  <tr>
                    <td>Serving Size (g):</td>
                    <td>{item.serving_size_g}</td>
                  </tr>
                  <tr>
                    <td>Total Fat (g):</td>
                    <td>{item.fat_total_g}</td>
                  </tr>
                  <tr>
                    <td>Saturated Fat (g):</td>
                    <td>{item.fat_saturated_g}</td>
                  </tr>
                  <tr>
                    <td>Protein (g):</td>
                    <td>{item.protein_g}</td>
                  </tr>
                  <tr>
                    <td>Sodium (mg):</td>
                    <td>{item.sodium_mg}</td>
                  </tr>
                  <tr>
                    <td>Potassium (mg):</td>
                    <td>{item.potassium_mg}</td>
                  </tr>
                  <tr>
                    <td>Cholesterol (mg):</td>
                    <td>{item.cholesterol_mg}</td>
                  </tr>
                  <tr>
                    <td>Total Carbohydrates (g):</td>
                    <td>{item.carbohydrates_total_g}</td>
                  </tr>
                  <tr>
                    <td>Fiber (g):</td>
                    <td>{item.fiber_g}</td>
                  </tr>
                  <tr>
                    <td>Sugar (g):</td>
                    <td>{item.sugar_g}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default NutritionInfo;
