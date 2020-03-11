import React from 'react';
import './Header.scss';
import logo from './images/logo.svg';

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
        <div className="profileicon">profile icon</div>
      </div>
    </header>
  );
}

export default Header;