import chesssketch from '../assets/chesssketch.PNG';
import './heart.css';
import React, { useState } from 'react';
import underthinkit from '../assets/underthinkit.JPG'; // make sure the path is correct


function Quizzes() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="heart-page">
      <div className="chess-container">
        <img src={chesssketch} alt="ChessSketch" className="chesssketch-image" />

        <div className="brothers-riddle-body">
          <h1>1. The Setup:</h1>
            <p className="riddle-step">There are two doors, one to heaven and one to hell. Two brothers, one who always tells the truth and one who always lies, stand guarding the doors. You don't know which brother is which.</p>

          <h2>2. The Question:</h2>
            <p className="riddle-step">You can ask one of the brothers a single question: "Which door would the other brother say leads to heaven?"</p>
          <h3>3. The Solution:</h3>

            {!showSolution ? (
              <img
                src={underthinkit}
                alt="Reveal solution"
                className="reveal-image"
                onClick={() => setShowSolution(true)}
                style={{ cursor: 'pointer', width: '250px', border: '2px solid white' }}
                />
              ) : (
                  <p className="riddle-step">
                      Regardless of which brother you ask, both will point you to the door to hell. So, pick the opposite door. That one leads to heaven.
                  </p>
              )}

          
</div>


        {/* Floating text blocks */}
        <div className="chess-text top-left">if you move it you will lose it</div>
        <div className="chess-text center-left">low risk, low reward</div>
        <div className="chess-text top-right">i don't have the energy to consider the consequences</div>
      </div>
    </div>
  );
}
 export default Quizzes;