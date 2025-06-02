import React, { useState, useEffect } from 'react';
import './Checklist.css'

function Checklist() {
  const defaultItems = [
    { text: 'iced vanilla latte', done: false },
    { text: 'ozempic allegations', done: false },
    { text: 'bedrot session', done: false },
    { text: 'homemade spaghetti by my dad', done: false },
    { text: 'year-round autumn air', done: false },
    { text: 'bath with bubbles', done: false },
  ];

  // Correctly use only one useState, with fallback to localStorage
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : defaultItems;
  });

  // Save to localStorage on every update
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <div className="checklist">
      <h2>Wishlist</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} onClick={() => toggleItem(idx)} style={{ cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleItem(idx)}
            />
            <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
