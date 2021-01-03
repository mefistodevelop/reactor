import React, { useEffect, useRef, useState } from 'react';
import './HeaderAuth.scss';
import { useSelector, useDispatch } from 'react-redux';
import Userpic from '../../common/Userpic/Userpic';
import { NavLink } from 'react-router-dom';
import { StateType } from '../../../redux/reduxStore';
import { signOut } from '../../../redux/authReducer';

export const HeaderAuth = () => {
  const headerState = useSelector((state: StateType) => state.auth);
  const { login, isAuth } = headerState;
  const userpic = headerState.userPhotos.large;
  const dispatch = useDispatch();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenu = (): void => setMenuIsOpen(!menuIsOpen);
  const menuMod: string = menuIsOpen ? ' header-auth__menu_open' : '';

  const wrapperRef: any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef && menuIsOpen && !wrapperRef.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <>
      {isAuth ? (
        <div className="header-auth" onClick={openMenu} ref={wrapperRef}>
          <div className="header-auth__profileicon">
            <Userpic path={userpic} />
          </div>
          <span className="header-auth__login">{login}</span>
          <div className={'header-auth__menu' + menuMod}>
            <ul className="header-auth__menu-list">
              <li className="header-auth__menu-item">
                <NavLink className="header-auth__menu-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="header-auth__menu-item">
                <button
                  className="header-auth__button"
                  onClick={() => dispatch(signOut())}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <NavLink className="header-auth__login-link" to={'/login'}>
          Sign in
        </NavLink>
      )}
    </>
  );
};
