import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profileReducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.setUserProfile(userId);
  }

  render() {
    return (
      <Profile { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter)(ProfileContainer);

