import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile, getUserStatus, updateStatus } from '../../redux/profileReducer';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.userId = null;
  }
  
  componentDidMount = () => {
    this.userId = this.props.match.params.userId;

    if (!this.userId) {
      this.userId = this.props.authorizedUserId;
    }

    this.props.setUserProfile(this.userId);
    this.props.getUserStatus(this.userId);
  }

  render() {
    return (
      <Profile { ...this.props } userId={ this.userId } />
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
  withRouter, withAuthRedirect)(ProfileContainer);

