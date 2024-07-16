import React, { useState } from 'react';
import axios from 'axios';
import './NutritionInfo.css'

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
    <div>
      <h1>Nutrition Info</h1>
      <input
        type="text"
        value={food}
        onChange={handleInputChange}
        placeholder="Enter food name"
      />
      <button onClick={fetchNutritionData}>Get Nutrition Info</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {nutrition && (
        <div>
          {nutrition.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>Calories: {item.calories}</p>
              <p>Serving Size (g): {item.serving_size_g}</p>
              <p>Total Fat (g): {item.fat_total_g}</p>
              <p>Saturated Fat (g): {item.fat_saturated_g}</p>
              <p>Protein (g): {item.protein_g}</p>
              <p>Sodium (mg): {item.sodium_mg}</p>
              <p>Potassium (mg): {item.potassium_mg}</p>
              <p>Cholesterol (mg): {item.cholesterol_mg}</p>
              <p>Total Carbohydrates (g): {item.carbohydrates_total_g}</p>
              <p>Fiber (g): {item.fiber_g}</p>
              <p>Sugar (g): {item.sugar_g}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
