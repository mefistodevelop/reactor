import React from 'react';
import './Header.scss';
import logo from './images/logo.svg';
import Userpic from '../Userpic/Userpic';

function Header(props) {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__logo">
          <a href="index.html" className="site-header__logo-link">
            <img src={logo} width="40" alt="Reactor logo" className="site-header__logo-image"/>
            Reactor
          </a>
          
        </div>
        <div className="site-header__search">
          <input type="text" className="site-header__search-bar" placeholder="Search" />
        </div>
        <div className="profileicon">
          <Userpic path="https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg" />
        </div>
      </div>
    </header>
  );
}

export default Header;