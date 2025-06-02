// Songs.js
import React from 'react';
import pianooo from '../assets/pianooo.PNG';
import './Songs.css'; // if you have custom styles
import spotify from '../assets/spotify.png'
import keyboard from '../assets/keyboard.JPG'
import stayalive from '../assets/stayalive.JPG'
import enjoythesilence from '../assets/enjoythesilence.JPG'

function Songs() {
  return (
    <div className="songs-page">
      <div className="speech-bubble">
  <p className="bubble-text">
    i don't think we'd rhyme,<br />
    i will wear you down in time.<br />
    i will hurt you, i'll desert you.<br />
    I am Jackie down the line.
  </p>
</div>


      <img src={spotify} alt="Spotify" className="spotify-image" />
      <img src={pianooo} alt="Piano" className="piano-image" />
      <img src={keyboard} alt="Keyboard" className="keyboard-image" />
      <img src={stayalive} alt="StayAlive" className="alive-image" />
      <img src={stayalive} alt="StayAlive" className="alive-image" />
      <img src={enjoythesilence} alt="Silence" className="silence-image" />
      <div className = "lyrics">
        <p>
        You're not the only one that I know
        And I'm far too proud to talk to you any day
        So I say I'm in love with the world
        And what is so wrong with voicing a doubt when I'm on my own?
        It's perfectly fine to sleep in a chair
        From Monday 'til Saturday
        And what is so wrong with talking out loud when I'm all alone 
        </p>
      </div>
    </div>
  );
}


export default Songs;
