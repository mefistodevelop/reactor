import React from 'react';
import './User.scss';
import userImage from '../../../assets/images/user-ghost.png';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';

function User(props) {
  return (
    <div className="user">
      <div className="user__main-wrapper">
        <div className="user__userpic">
          <NavLink to={'/profile/' + props.id }>
            <Userpic path={ props.userpic ? props.userpic : userImage } />
          </NavLink>
        </div>
        <div className="user__button">
          <button className="button">
            { props.followed ? 'unfollow' : 'follow' }
          </button>
        </div>
      </div>

      <div className="user__info">
        <span className="user__name">
          { props.name }
        </span>
        <span className="user__status">
          { props.status }
        </span>
      </div>

      <div className="user__location">
        <span className="user__country">{ 'props.location.country' }</span>
        <span className="user__city">{ 'props.location.city' }</span>
      </div>
    </div>
  );
}

export default User;