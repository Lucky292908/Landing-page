// components/Header.js
import React from 'react';
import y from '../images/y.png';
import './Header.css';  // Import your CSS file

const Header = () => {
  return (
    <header>
      <img src={y} alt="Logo" className="logo" />

      {/* Navigation with dropdowns */}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            What We Do
            <div className="dropdown-content">
              <a href="#">Service 1</a>
              <a href="#">Service 2</a>
              <a href="#">Service 3</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            Who We Are
            <div className="dropdown-content">
              <a href="#">Team</a>
              <a href="#">Values</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            Insights
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
            </div>
          </li>
          <li className="nav-item dropdown">
           Careers
            <div className="dropdown-content">
              <a href="#">Job Openings</a>
              <a href="#">Apply Now</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
