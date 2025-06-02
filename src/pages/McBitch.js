import React from 'react';
import './McBitch.css'; // create this stylesheet
import bec from '../assets/bec.JPG'
import breadbutter1 from '../assets/breadbutter1.JPG'
import breadbutter2 from '../assets/breadbutter2.JPG'
import cheesyknot from '../assets/cheesygarlicknot.JPG'
import coffeehearts from '../assets/coffeewithhearts.JPG'
import frieddumplings from '../assets/frieddumplings.JPG'
import fruitplate from '../assets/fruitplate.JPG'
import italydinner from '../assets/italydinner.JPG'
import potrigatoni from '../assets/potrigatoni.JPG'
import ragu from '../assets/ragu.JPG'




function McBitch() {
  return (
    <div className="menu-container">
      <h1>Wednesday Menu</h1>

      <div className="menu-section">
        <h2>Breakfast</h2>
        <ul>
          <li>iced caramel latte with so much caramel</li>
          <li>bacon, egg, and cheese on a cinnamon sugar bagel</li>
        </ul>
      </div>

      <div className="menu-section">
        <h2>Lunch</h2>
        <ul>
          <li>tteoboki and ramen with cheese</li>
          <li>fried gyoza</li>
          <li>honeycrisp apple</li>
        </ul>
      </div>

      <div className="menu-section">
        <h2>Dinner</h2>
        <ul>
          <li>cheesy garlic bread with marinara and ranch</li>
          <li>spicy rigatoni with sausage</li>
          <li>cannoli and decaf latte</li>
        </ul>
      </div>
      <div className="food-pics">
        <img src={bec} alt='BEC' className='bec-image'/>
        <img src={breadbutter1} alt='bb1' className='bb1-image'/>
        <img src={breadbutter2} alt='bb2' className='bb2-image'/>
        <img src={cheesyknot} alt='cheesyknot' className='cheesyknot-image'/>
        <img src={coffeehearts} alt='coffeehearts' className='coffeehearts-image'/>
        <img src={frieddumplings} alt='frieddumplings' className='frieddumplings-image'/>
        <img src={fruitplate} alt='fruitplate' className='fruitplate-image'/>
        <img src={italydinner} alt='italydinner' className='italydinner-image'/>
        <img src={potrigatoni} alt='potrigatoni' className='potrigatoni-image'/>
        <img src={ragu} alt='ragu' className='ragu-image'/>



      </div>
    </div>
  );
}

export default McBitch;
