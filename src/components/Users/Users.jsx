import React from 'react';
import './Users.scss';
import User from './User/User';

function Users(props) {
  const users = props.users.map((user) => {
    return (
      <li className="users__item" key={user.id}>
        <User
          name={user.name}
          status={user.status}
          userpic={user.userpic}
          location={user.location}
          followed={user.followed}
        />
      </li>

    );
  });
  return (
    <section className="users">
      <ul className="users__list">
        {users}
      </ul>
    </section>
  );
}

export default Users;
