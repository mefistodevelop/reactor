import React from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';
import logo from './images/logo.svg';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import { StateType } from '../../redux/reduxStore';
import { signOut } from '../../redux/authReducer';

export function Header() {
  const headerState = useSelector((state: StateType) => state.auth);
  const { id, login, isAuth } = headerState;
  const userpic = headerState.userPhotos.large;

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
            id={id}
            login={login}
            signOut={signOut}
            isAuth={isAuth}
            userpic={userpic}
          />
        </div>
      </div>
    </header>
  );
}
