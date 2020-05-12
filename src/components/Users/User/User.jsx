import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';

function User({
  followed,
  followingInProgress,
  follow,
  unfollow,
  id,
  userpic,
  name,
  status,
}) {
  return (
    <div className="user">
      <div className="user__main-wrapper">
        <div className="user__userpic">
          <NavLink to={`/profile/${id}`}>
            <Userpic path={userpic} />
          </NavLink>
        </div>
        <div className="user__button">
          <button
            className="button"
            type="button"
            disabled={followingInProgress.some((userId) => userId === id)}
            onClick={() => (followed ? unfollow(id) : follow(id))}
          >
            {followed ? 'unfollow' : 'follow'}
          </button>
        </div>
      </div>

      <div className="user__info">
        <span className="user__name">
          <NavLink className="user__name-link" to={`/profile/${id}`}>
            {name}
          </NavLink>
        </span>
        <span className="user__status">
          {status}
        </span>
      </div>

      <div className="user__location">
        <span className="user__country">location.country</span>
        <span className="user__city">location.city</span>
      </div>
    </div>
  );
}

User.propTypes = {
  followed: PropTypes.bool.isRequired,
  followingInProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  userpic: PropTypes.string,
  status: PropTypes.string,
};

User.defaultProps = {
  userpic: '',
  status: '',
};

export default User;
