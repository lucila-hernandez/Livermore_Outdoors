import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="About">
      <header className="About-Header">
      <img src="/images/logo.png" alt="Livermore Outdoors" className="About-Image" />
      </header>

      <section className="About-Content">
      <h2>About Livermore Outdoors</h2>
        <p>🌲 Livermore Outdoors showcases the city's best parks, trails, and open spaces, offering scenic spots for 
          hiking 🥾, picnicking 🧺, and recreation 🏕️.
        </p>
        <p>
          From lush green parks 🌿 to peaceful nature trails 🚶‍♂️, these outdoor spaces provide a place for 
          relaxation 🌄 and adventure 🚴‍♂️in the heart of Livermore.
        </p>
      </section>


      <section className="About-Explore">
        <h2>Start Exploring</h2>
        <Link to="/">
          <button className="explore-button">Explore Now</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
