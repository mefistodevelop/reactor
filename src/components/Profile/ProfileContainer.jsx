import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile, getUserStatus, updateStatus } from '../../redux/profileReducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    let userId = this.props.match.params.userId;

    if (this.props.isAuth) {
      if (!userId) {
        userId = 6884;
      }
  
    }

    this.props.setUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
  userStatus: state.profilePage.userStatus,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserStatus, updateStatus }),
  withRouter)(ProfileContainer);

