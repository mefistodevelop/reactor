import React from 'react';
import './Header.scss';
import logo from './images/logo.svg';
import HeaderAuth from './HeaderAuth/HeaderAuth';

function Header(props) {

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__logo">
          <a href="index.html" className="site-header__logo-link">
            <img
              className="site-header__logo-image"
              src={logo}
              width="40"
              alt="Reactor logo"
            />
            Reactor
          </a>
        </div>

        <div className="site-header__search">
          <input type="text" className="site-header__search-bar" placeholder="Search" />
        </div>

        <div className="site-header__auth-wrapper">
          <HeaderAuth
            id={props.id}
            login={props.login}
            signOut={props.signOut}
            isAuth={props.isAuth}
            userpic={props.userpic}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;