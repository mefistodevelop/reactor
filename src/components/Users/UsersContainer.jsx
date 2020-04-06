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
} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { usersApi } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
      }
    );
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);

    usersApi.getUsers(pageNumber, this.props.pageSize)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.items);
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
          followingInProgress={ this.props.followingInProgress }
          setFollowingInProgress={ this.props.setFollowingInProgress }
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
  });
};

export default connect(
  mapStateToProps,
  { follow, unfollow, setUsers, 
    setCurrentPage, setTotalUsersCount, setIsFetching, setFollowingInProgress }
)(UsersContainer);
