import React from 'react';
import './stars.css';
import mistersun from '../assets/mistersun.png';
import bluegingham from '../assets/bluegingham.jpg';
import fireimage1 from '../assets/fire1.jpg'
import fireimage2 from '../assets/fire2.jpg'
import thursdayforecast from '../assets/thursdayforecast.jpg'
import fridayforecast from '../assets/fridayforecast.jpg'
import saturdayforecast from '../assets/saturdayforecast.jpg'
import sundayforecast from '../assets/sundayforecast.jpg'
import mondayforecast from '../assets/mondayforecast.jpg'


const days = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
const temps = ['85°F', '88°F', '92°F', '95°F', '87°F'];

const thermometers = [
  thursdayforecast,
  fridayforecast,
  saturdayforecast,
  sundayforecast,
  mondayforecast
];

function Stars() {
  return (
    <div 
      className="stars-page"
      style={{ backgroundImage: `url(${bluegingham})` }}
      >
      <div className="lovesci-text">
        <p>
        But the writer Ron Rosenbaum (known for his books on Hitler, Shakespeare, and nuclear warfare) wants love to remain an enigma. His new book, <em>In Defense of Love: An Argument</em>, is its own kind of ode to mystery—namely, the ineffable experience of being in love. Because of its beauty, nuance, and “ethereality,” Rosenbaum argues, romantic love is simply “not amenable to scientific inquiry.” Yet agents of what Rosenbaum calls “neuroscience imperialism”—otherwise known as researchers—continue to wage an “assault on the soul of love,” reducing its complexities to brain scans and data points.
        </p>
      <p className="citation">
        – Sophia Stewart, <em>The Atlantic</em>
      </p>
    </div>

    <div className="sun-stack">
      {days.map((day, i) => (
      <div className="sun-row" key={i}>
        <span className="sun-day">{day}</span>
          <img src={mistersun} alt={`Sun ${i}`} className="sun-image" />
          <img src={thermometers[i]} alt={`Thermometer ${day}`} className="therm-image" />
      <span className="temp-text">{temps[i]}</span>
    </div>
  ))}


        
<div className="title-text">
  <p>
    it's almost <span className="fire-font">fire season</span>, California freaks
  </p>
</div>
</div>

<div className="fire-images">
  <img src={fireimage1} alt="Fire1" className="fire-image-1" />
  <img src={fireimage2} alt="Fire2" className="fire-image-2" />
</div>

    </div>

  
  );
}


export default Stars;



