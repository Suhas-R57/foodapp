import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu ' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Indulge in a culinary journey at our restaurant. Discover a tantalizing array of dishes crafted with fresh, seasonal ingredients. From savory appetizers to decadent desserts, 
            our menu promises to delight your palate with exquisite flavors and inventive presentations.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
