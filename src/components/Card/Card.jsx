import React from 'react';
import './Card.css'; // Make sure to create an appropriate CSS file to style the component
import { assets } from '../../assets/assets';

const Card = ({category}) => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu">
        <div className="menu-image">
          <img src={assets.Sample_logo} alt="Menu" />
          <div className="labels">
            <div className="label" style={{ top: '20%', left: '10%' }}>Sweet Pongal</div>
            <div className="label" style={{ top: '50%', left: '10%' }}>Usli (Subji)</div>
            <div className="label" style={{ top: '80%', left: '50%' }}>Butter Milk</div>
            <div className="label" style={{ top: '50%', left: '70%' }}>Pickle</div>
            <div className="label" style={{ top: '20%', left: '70%' }}>Rice & Sambar</div>
          </div>
        </div>
        <div className="consumption">
          <h2>Our monthly consumption</h2>
          <ul>
            <li>Rice - 1000KG</li>
            <li>Chilli - 100KG</li>
            <li>Sugar - 500KG</li>
            <li>Moong Dal - 500KG</li>
            <li>Salt - 100KG</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
