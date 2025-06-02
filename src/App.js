import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stars from './pages/Stars';
import Quizzes from './pages/Quizzes';
import Songs from './pages/Songs';
import Horoscope from './pages/Horoscope';
import Miscellaneous from './pages/Miscellaneous';
import './App.css';
import moonImage from './assets/moonbright1.JPEG';
import cloud1 from './assets/cloud1.PNG';
import cloud2 from './assets/cloud2.PNG';
import HoroscopeCrossword from './pages/HoroscopeCrossword';
import GoodbyeAlex from './pages/GoodbyeAlex';
import yawningmoon from './assets/yawningmoon.PNG';
import maycalendar from './assets/calendar white larger .png'
import Checklist from './pages/Checklist';
import nownownow from './assets/nownownow.PNG';
import McBitch from './pages/McBitch';



function App() {
  return (
    <Router>
      <div>
        {/* Top Section with Title and Links */}
        <div className="top-section">
          <Link to="/" className="site-title">Wednesday Nights</Link>
          <div className="nav-links-slim">
            <Link to="/Stars">Stars</Link>
            <Link to="/Quizzes">Quizzes</Link>
            <Link to="/songs">Songs</Link>
            <Link to="/horoscope">Horoscope</Link>
            <Link to="/miscellaneous">Miscellaneous</Link>
          </div>
        </div>

        <Routes>
        <Route path="/" element={
  <div className="main-page">
    <div className="main-content">
      <img src={moonImage} alt="Moon" className="moon-image" />
      <img src={cloud1} alt="Cloud1" className="cloud1-image" />
      <img src={cloud2} alt="Cloud2" className="cloud2-image" />
      <img src={yawningmoon} alt="YawnMoon" className="yawning-moon-image" />
      <img src={maycalendar} alt="MayCalendar" className="may-calendar" />
      <img src={nownownow} alt="Clock" className="nownownow-image" />
      <div className="text-container">
    <h1>Berkeley Freaks,</h1>
      <p>
      Please finish your finals. And wouldn't it be funny if I just showed up the Cal Forestry Alumni banquet on May 31st? I miss you deeply, dearly, every day. I will never foresake Berkeley again. My home is Moffitt 4th floor, my diet is complete in Asian Ghetto, and I will get local legend back. Feeling yawny
      </p>
    </div>
    <div className="calendar-text-container">
      <h2>May 2025</h2>
      </div>
      <Checklist />
    </div>
    <div className="speech-container">
      <h1>stupid! so dummy</h1>
      </div>
  </div>
} />

          <Route path="/Stars" element={<Stars />} />
          <Route path="/Quizzes" element={<Quizzes />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/horoscope" element={<HoroscopeCrossword />} />
          <Route path="/mercury" element={<GoodbyeAlex />} />
          <Route path="/Checklist" element={<Checklist />} />
          <Route path="/pollux" element={<McBitch />} />




        </Routes>
      </div>
    </Router>
  );
}

export default App;
