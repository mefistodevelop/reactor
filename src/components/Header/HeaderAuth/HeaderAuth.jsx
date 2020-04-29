import React from 'react';
import './HeaderAuth.scss';
import Userpic from '../../common/Userpic/Userpic';
import { NavLink } from 'react-router-dom';

class HeaderAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && this.state.menuIsOpen && !this.wrapperRef.contains(event.target)) {
      this.setState({
        menuIsOpen: false,
      });
    }
  }

  openMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {

    const menuMod = this.state.menuIsOpen ? ' header-auth__menu_open' : '';

    if (this.props.isAuth) {
      return (
        <div className="header-auth" onClick={this.openMenu} ref={this.setWrapperRef}>
          <div className="header-auth__profileicon">
            <Userpic path={this.props.userpic} />
          </div>
          <span className="header-auth__login">{this.props.login}</span>
          <div className={'header-auth__menu' + menuMod}>
            <ul className="header-auth__menu-list" >
              <li className="header-auth__menu-item">
                <NavLink className="header-auth__menu-link" to="/profile">Profile</NavLink>
              </li>
              <li className="header-auth__menu-item">
                <button className="header-auth__button" onClick={this.props.signOut}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <NavLink className="header-auth__login-link" to={'/login'}>
        Sign in
      </NavLink>
    );

  }

}

export default HeaderAuth;
