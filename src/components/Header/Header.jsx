import React from 'react';
import './Header.scss';
import logo from './images/logo.svg';
import Userpic from '../common/Userpic/Userpic';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const auth = () => {
    if (props.isAuth) {
      return (
        <NavLink to={ '/profile/' + props.id }>
          <div className="site-header__auth">
            <div className="site-header__profileicon">
              <Userpic path="https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg" />
            </div>
            <NavLink className="site-header__login-link" to={'/login'}>
              <span className="site-header__login">{ props.login }</span>
            </NavLink>
          </div>
          
        </NavLink>
      );
    } else {
      return (
        <span>log in</span>
      );
    }
  }

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
        
        <div className="site-header__auth-wrapper">
          { auth() }
        </div>
        
      </div>
    </header>
  );
}

export default Header;