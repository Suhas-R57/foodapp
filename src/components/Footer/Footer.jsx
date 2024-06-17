import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets._logo} alt="" />
                <p> t7yegy kiokjhvujveoiu kwjjorkf jhygfk jhvbjkdgdhjgujk gyfukgigy iyiudhkge riu uigfhuhwuyfe riehihgreyfiue gherygiur</p>
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
