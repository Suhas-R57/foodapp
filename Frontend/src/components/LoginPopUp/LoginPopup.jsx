import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign up")

  return (
    <div className='login-popup'>
        <video autoPlay loop muted>
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="login-popup-tagline">
                <h1>Your Culinary Journey Begins Here</h1> {/* Add your chosen tagline here */}
            </div>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type='text' placeholder='Your Name' required />}
            <input type='email' placeholder='Your Email' required />
            <input type='password' placeholder='Password' required />
        </div>
        <button>{currState=="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By continuing,i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Click here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
