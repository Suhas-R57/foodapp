// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import FoodItemList from './pages/FoodCalorie/Calorie';
import FoodItemCalorie from './components/CalorieTracker/FoodItem'; // Import the new component

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/calorie' element={<FoodItemList/>} />
        <Route path='/calorie/:id' element={<FoodItemCalorie/>} /> {/* New Route */}
      </Routes>
    </div>
  )
}

export default App;
