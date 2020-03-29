import React from 'react';
import './Users.scss';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      // debugger
      }
    );
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      }
    );
  }

  render() {
    const { pageSize, totalUsersCount, currentPage } = this.props;
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pagesNumbers = [];

    for (let i = 1; i <= pagesCount; i += 1) {
      pagesNumbers.push(i);
    }

    const pages = pagesNumbers.map((pageNumber) => {
      const mod = currentPage === pageNumber ? ' pagination__button_active' : '';
      return (
        <button className={"pagination__button" + mod} type="button" onClick={ () => this.onCurrentPageChange(pageNumber) }>
          { pageNumber }
        </button>
      );
    });

    const users = this.props.users.map((user) => {
      return (
        <li className="users__item" key={ user.id }>
          <User
            name={ user.name }
            status={ user.status }
            userpic={ user.photos.small }
            location={ user.location }
            followed={ user.followed }
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
  };
}

export default Users;
