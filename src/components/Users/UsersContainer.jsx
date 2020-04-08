import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow, 
  unfollow, 
  setUsers, 
  setCurrentPage, 
  setTotalUsersCount,
  setIsFetching,
  setFollowingInProgress,
  getUsers,
} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          followingInProgress={ this.props.followingInProgress }
          setFollowingInProgress={ this.props.setFollowingInProgress }
          isAuth={ this.props.isAuth }
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
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  });
};

export default connect(
  mapStateToProps,
  { follow, unfollow, setUsers, 
    setCurrentPage, setTotalUsersCount, setIsFetching,
    setFollowingInProgress, getUsers, }
)(UsersContainer);
