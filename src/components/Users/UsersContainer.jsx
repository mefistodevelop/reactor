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
  requestUsers,
} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
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
        />
      </>
    );
  };
}

// const mapStateToProps = (state) => {
//   return ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   });
// };

const mapStateToProps = (state) => {
  return ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  });
};

export default compose(
  connect(mapStateToProps,
    { follow, unfollow, setUsers, 
      setCurrentPage, setTotalUsersCount, setIsFetching,
      requestUsers,
    }
  ),
  withAuthRedirect,
)(UsersContainer);
