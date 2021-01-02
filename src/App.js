import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import Spinner from './components/common/Spinner/Spinner';
import { Users } from './components/Users/Users';

class App extends React.Component {
  componentDidMount = () => {
    // eslint-disable-next-line
    this.props.initializeApp();
  };

  render() {
    const { initialized } = this.props;

    if (!initialized) {
      return (
        <div className="spinner">
          <Spinner size="100" />
        </div>
      );
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="content-wrapper">
          <Navbar />
          <div className="content">
            <Route exact path="/" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
