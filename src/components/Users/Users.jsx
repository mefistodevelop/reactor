import React from 'react';
import './Users.scss';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.getUsers();
  }

  getUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  
  render() {
    const users = this.props.users.map((user) => {
      return (
        <li className="users__item" key={ user.id }>
          <User
            name={ user.name }
            status={ user.status }
            userpic={ user.userpic }
            location={ user.location }
            followed={ user.followed }
          />
        </li>
      );
    });
    
    return (
      <section className="users">
        <ul className="users__list">
          { users }
        </ul>
      </section>
    );
  };
}

export default Users;
