import React from 'react';
import './Users.scss';
import User from './User/User';

function Users(props) {

  const { pageSize, totalUsersCount, currentPage, onCurrentPageChange } = props;
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pagesNumbers = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pagesNumbers.push(i);
  }

  const pages = pagesNumbers.map((pageNumber, i) => {
    const mod = (currentPage === pageNumber) ? ' pagination__button_active' : '';
    return (
      <button key={i} className={ "pagination__button" + mod } 
              type="button" 
              onClick={ () => onCurrentPageChange(pageNumber) }>
        { pageNumber }
      </button>
    );
  });

  const users = props.users.map((user) => {
    return (
      <li className="users__item" key={ user.id }>
        <User
          name={ user.name }
          status={ user.status }
          userpic={ user.photos.large }
          location={ user.location }
          followed={ user.followed }
          id={ user.id }
          follow={ props.follow }
          unfollow={ props.unfollow }
          followingInProgress={ props.followingInProgress }
        />
      </li>
    );
  });
  
  return (
    <section className="users">
      <div className="users__pagination">
        { pages }
      </div>
      <ul className="users__list">
        { users }
      </ul>
    </section>
  );
}

export default Users;
