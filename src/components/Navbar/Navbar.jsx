import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">PerfectPC</span>
      </div>
      <div className="navbar-right">
        <a href="#build" className="navbar-link">Build</a>
        <a href="#about" className="navbar-link">About</a>
      </div>
    </nav>
  );
};

export default Navbar;