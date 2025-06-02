import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './horoscope.css';

const data = {
  across: {
    4: { clue: 'no ties, only cats games', answer: 'TICTACTOE', row: 3, col: 0},
    5: { clue: 'milky coffee order', answer: 'LATTE', row: 5, col: 2},
    // Add more across entries here
  },
  down: {
    1: { clue: "talent", answer: 'GIFT', row: 0, col: 0 },
    2: { clue: "homeless cat", answer: 'STRAY', row: 2, col: 3},
    3: { clue: "RUFUS DU __", answer: 'SOL', row: 2, col: 7},
    6: { clue: "you put in more, you get more out (theoretically)", answer: 'EFFORT', row: 5, col: 6},
    // Add more down entries here
  },
};

function HoroscopeCrossword() {
  return (
    <div className="horoscope-page">
      <div className="crossword-wrapper">
        <Crossword data={data} />
      </div>
    </div>
  );
}

export default HoroscopeCrossword;
