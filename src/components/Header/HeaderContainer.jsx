import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { signOut } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    );
  };
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  userpic: state.auth.userPhotos.large,
});

export default connect(mapStateToProps, { signOut })(HeaderContainer);
