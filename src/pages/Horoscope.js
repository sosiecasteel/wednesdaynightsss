// Horoscope.js
import React from 'react';
import starbluenomoon from '../assets/starbluenomoon.png';
import './horoscope.css'; // make sure this path matches the actual file
import HoroscopeCrossword from './HoroscopeCrossword';
import floatinggirl from '../assets/floatinggirl.png'
import floatingcat from '../assets/floatingcat.png'
import girlymoon from '../assets/girlymoon.png'

function Horoscope() {
  return (
    <div
      className="horoscope-page"
      style={{ backgroundImage: `url(${starbluenomoon})` }}
    >
      <div className="notes-text">i've been plotting on u</div>
      {/* Add the crossword here */}
      <div className="crossword">
        <HoroscopeCrossword />
      </div>
      <div className = "various-images">
        <img src ={floatinggirl} alt = {'Girl'} className = {'floatinggirl-image'}/>
        <img src ={floatingcat} alt = {'Cat'} className = {'floatingcat-image'}/>
        <img src ={girlymoon} alt = {'Moon'} className = {'girlymoon-image'}/>

      <div className = "random-text">
        <p>
          Alex unblocked me today. I can almost remember what he's like in person . He views my profile on LinkedIn and Davis'. I think he's thinking about me. I try and take everything as a good sign. I know he doesn't necessarily want to finish his Data Science major but I really hope we have classes together next year. That would mean everything to me to get to see him every day. Or we could be peer advisors together. I'm so glad I'm not SUI or Finance. I can stand out against all the cracked girls he's surrounded by.
        </p>
      </div>


      </div>

    </div>
  );
}

export default Horoscope;

  