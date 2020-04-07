import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAuthData();
  }

  render() {
    return (
      <Header { ...this.props } login={ this.props.login } />
    );
  };
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { getAuthData })(HeaderContainer);
