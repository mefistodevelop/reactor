import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followAC, 
  unfollowAC, 
  setUsersAC, 
  setCurrentPageAC, 
  setTotalUsersCountAC,
  setIsFetchingAC,
} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
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
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
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

const mapDispatchToProps = (dispatch) => {
  return ({
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
