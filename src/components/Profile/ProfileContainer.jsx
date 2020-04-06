import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileApi.getUserProfile(userId)
      .then((response) => this.props.setUserProfile(response));
  }

  render() {
    return (
      <Profile { ...this.props } profile={ this.props.profile }  />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
