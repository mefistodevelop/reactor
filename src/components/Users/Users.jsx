import React from 'react';
import PropTypes from 'prop-types';
import './Users.scss';
import User from './User/User';
import Pagination from '../common/Pagination/Pagination';

function Users({
  pageSize, totalUsersCount, currentPage,
  onCurrentPageChange, users, follow,
  unfollow, followingInProgress,
}) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pagesNumbers = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pagesNumbers.push(i);
  }

  const pages = pagesNumbers.map((pageNumber, i) => (
    <Pagination
      key={i}
      pageNumber={pageNumber}
      currentPage={currentPage}
      onCurrentPageChange={onCurrentPageChange}
    />
  ));

  const usersItems = users.map((user) => (
    <li className="users__item" key={user.id}>
      <User
        name={user.name}
        status={user.status}
        userpic={user.photos.large}
        location={user.location}
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
        {pages}
      </div>
      <ul className="users__list">
        {usersItems}
      </ul>
    </section>
  );
}

Users.propTypes = {
  pageSize: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  followingInProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Users;
