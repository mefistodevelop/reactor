import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="navbar__navigation">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-item">
            <NavLink className={'navbar__navigation-link'} to={'/profile'}>
              Profile
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink className={'navbar__navigation-link'} to={'/messages'}>
              Messages
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink className={'navbar__navigation-link'} to={'/news'}>
              News
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink className={'navbar__navigation-link'} to={'music'}>
              Music
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink className={'navbar__navigation-link'} to={'/settings'}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
