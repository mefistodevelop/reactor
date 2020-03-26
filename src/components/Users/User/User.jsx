import React from 'react';
import './User.scss';
import Userpic from '../../Userpic/Userpic';

function User(props) {
  return (
    <div className="user">
      <div className="user__main-wrapper">
        <div className="user__userpic">
          <Userpic path={props.userpic} />
        </div>
        <div className="user__button">
          <button className="button">
            {props.followed ? 'unfollow' : 'follow'}
          </button>
        </div>
      </div>

      <div className="user__info">
        <span className="user__name">
          {props.name}
        </span>
        <span className="user__status">
          { props.status }
        </span>
      </div>

      <div className="user__location">
        <span className="user__country">{props.location.country}</span>
        <span className="user__city">{props.location.city}</span>
      </div>
    </div>
  );
}

export default User;