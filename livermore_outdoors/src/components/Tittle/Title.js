import { NavLink } from 'react-router-dom';
import React from 'react';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <header className="Title">
      <div className="Title-Left">
        <h1 className="Title-Name">Livermore Outdoors</h1>
      </div>
      <nav className="Title-Nav">
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          to="/about">Home</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          to="/">Explore</NavLink>
      </nav>
      <RandomSpace />
    </header>
  );
}

export default Title;
