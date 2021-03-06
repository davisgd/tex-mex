import React from 'react';
import TEX_DATA from './TEX_DATA';

const TexMexMenu = (props) => {

  const menuItems = TEX_DATA.items.map(function(items, index){
    return(
      <div>
        <div className="menu-items">
          <h3>Name: { items.name }</h3>
          <h5>Price: { items.price }</h5>
          <h5>Category: { items.category }</h5>
          <h5>Spice Rating (1-10): { items.spiceLevel }</h5>
          <img src={ items.img } />
        </div>
      </div>
    )
  })

  const spiceBelowFive = TEX_DATA.spiceLevel.filter(function(num){
    return num < 5;
  })
  .map(function(num, index){
    return <li key={index}> { TEX_DATA.spiceLevel < num } </li>
  })

  return(
    <div className="less-spicy-items">
      <h3>Entrees for the Weak</h3>
      <ul>
        { spiceBelowFive }
      </ul>
    </div>
  )
}

export default TexMexMenu;
