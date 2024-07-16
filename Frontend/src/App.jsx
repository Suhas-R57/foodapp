// App.jsx
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NutritionInfo from './pages/calorieapi/NutritionInfo'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import FoodItemList from './pages/FoodCalorie/Calorie'
import FoodItemCalorie from './components/CalorieTracker/FoodItem' // Import the new component
import LoginPopup from './components/LoginPopUp/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/nutritioninfo' element={<NutritionInfo/>} />
        <Route path='/calorie' element={<FoodItemList/>} />
        <Route path='/calorie/:id' element={<FoodItemCalorie/>} /> {/* New Route */}
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
