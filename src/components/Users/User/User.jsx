import React from 'react';
import './User.scss';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';
import * as axios from 'axios';

function User(props) {
  const button = () => {
    if (props.followed) {
      return (
        <button className="button" onClick={ () => {
          axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${ props.id }`, {
              withCredentials: true,
              headers: {
                "API-KEY": "07273082-6b6c-45d4-9373-3d4dc2812a9e",
              }
            })
            .then((response) => {
              if (response.data.resultCode === 0) {
                props.unfollow(props.id);
              }
            });
        } }>
          unfollow
        </button>
      );
    } else {
      return (
        <button className="button" onClick={ () => {
          axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${ props.id }`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY": "07273082-6b6c-45d4-9373-3d4dc2812a9e",
              }
            })
            .then((response) => {
              if (response.data.resultCode === 0) {
                props.follow(props.id);
              }
            });
        }}>
          follow
        </button>
      );
    }
  }
  return (
    <div className="user">
      <div className="user__main-wrapper">
        <div className="user__userpic">
          <NavLink to={'/profile/' + props.id }>
            <Userpic path={ props.userpic } />
          </NavLink>
        </div>
        <div className="user__button">
          { button() }
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