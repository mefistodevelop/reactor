import React from 'react';
import './User.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';

type UserProps = {
  followed: boolean;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  id: number;
  userpic: string | null;
  name: string;
  status: string;
};

export function User({
  followed,
  followingInProgress,
  follow,
  unfollow,
  id,
  name,
  userpic,
  status,
}: UserProps) {
  const dispatch = useDispatch();

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
            onClick={(): void =>
              followed ? dispatch(unfollow(id)) : dispatch(follow(id))
            }
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
        <span className="user__status">{status}</span>
      </div>

      <div className="user__location">
        <span className="user__country">location.country</span>
        <span className="user__city">location.city</span>
      </div>
    </div>
  );
}
