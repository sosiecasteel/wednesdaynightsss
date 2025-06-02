import React from 'react';
import miscbg from '../assets/articlesarticlesarticles.jpg';
import './misc.css'; // use correct casing to match the file
import star from '../assets/star.PNG'
import { Link } from 'react-router-dom';


function Miscellaneous() {
    return (
      <div className="misc-page"
        style={{ backgroundImage: `url(${miscbg})` }}>
    
      {/* Star 1 */}
      <div className="star-container sirius">
        <Link to="/sirius" className="star-link">
          <img src={star} alt="Star" className="star-image" />
          <span className="star-text">No more!</span>
        </Link>
      </div>

      {/* Star 2 */}
      <div className="star-container mercury">
      <Link to="/mercury" className="star-link">
        <img src={star} alt="Star" className="star-image" />
        <span className="star-text">Closure</span>
      </Link>

    </div>

      {/* Star 3 */}
      <div className="star-container pollux">
        <Link to="/pollux" className="star-link">
          <img src={star} alt="Star" className="star-image" />
          <span className="star-text">McBitch</span>
        </Link>
      </div>


      {/* Star 4 */}
      <div className="star-container northstar">
      <Link to="/northstar" className="star-link">
        <img src={star} alt="Star" className="star-image" />
        <span className="star-text">i fw you</span>
      </Link>

    </div>
    {/* Star 5 */}
    <div className="star-container rue">
        <Link to="/rue" className="star-link">
          <img src={star} alt="Star" className="star-image" />
          <span className="star-text">love is lustless</span>
        </Link>
      </div>
    </div>
        );
        }
  export default Miscellaneous;

  

       