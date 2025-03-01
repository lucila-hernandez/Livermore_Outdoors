import { NavLink } from 'react-router-dom'
import React from 'react';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Livermore Outdoors</h1>
        <div className="Title-Subtitle">Explore. Relax. Adventure.</div>

        <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">List</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title