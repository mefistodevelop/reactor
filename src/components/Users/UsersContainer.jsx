import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow, 
  unfollow, 
  setUsers, 
  setCurrentPage, 
  setTotalUsersCount,
  setIsFetching,
} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`,
      {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      }
    );
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`,
      {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      }
    );
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Spinner /> : '' }
        <Users
          pageSize={ this.props.pageSize }
          totalUsersCount={ this.props.totalUsersCount }
          currentPage={ this.props.currentPage }
          onCurrentPageChange={ this.onCurrentPageChange }
          users={ this.props.users }
          follow={ this.props.follow }
          unfollow={ this.props.unfollow }
        />
      </>
    );
  };
}


const mapStateToProps = (state) => {
  return ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  });
};

export default connect(
  mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, }
)(UsersContainer);
