import React from 'react';
import './Users.scss';
import User from './User/User';
import { Pagination } from '@material-ui/lab';
import { UserType } from '../../types/types';

type UsersProps = {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  onCurrentPageChange: () => void;
  users: Array<UserType>;
  follow: () => void;
  unfollow: () => void;
  followingInProgress: Array<number>;
};

export function Users({
  pageSize,
  totalUsersCount,
  currentPage,
  onCurrentPageChange,
  users,
  follow,
  unfollow,
  followingInProgress,
}: UsersProps) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const usersItems = users.map((user) => (
    <li className="users__item" key={user.id}>
      <User
        name={user.name}
        status={user.status}
        userpic={user.photos.large}
        followed={user.followed}
        id={user.id}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    </li>
  ));

  return (
    <section className="users">
      <div className="users__pagination">
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={onCurrentPageChange}
        />
      </div>
      <ul className="users__list">{usersItems}</ul>
    </section>
  );
}
