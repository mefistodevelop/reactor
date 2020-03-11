import React from 'react';
import './Navbar.scss';

function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="navbar__navigation">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-item">Profile</li>
          <li className="navbar__navigation-item">Messages</li>
          <li className="navbar__navigation-item">News</li>
          <li className="navbar__navigation-item">Music</li>
          <li className="navbar__navigation-item">Settings</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
