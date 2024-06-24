import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets._logo} alt="" />
                <p> "Satisfy your cravings with our seamless food ordering experience. From local favorites to exotic cuisines, we've got your taste buds covered. Order now and enjoy fast delivery, fresh ingredients, and flavors that delight. Your next meal is just a click away. Bon appétit!"</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9854388466</li>
                    <li>contact@foodexpress.com</li>
                </ul>

            </div>
            
        </div>
        <p className='footer-copyright'>Copyright 2024 @ Foodexpress.com -All Right Reserved</p>

      
    </div>
  )
}

export default Footer
