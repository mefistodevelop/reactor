import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Spinner from './components/common/Spinner/Spinner';

class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <div className="spinner"><Spinner size='100' /></div>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="content-wrapper">
          <Navbar />
          <div className="content">
            <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> }/>
            <Route path={'/messages'} render={ () => <MessagesContainer /> }/>
            <Route path={'/users'} render={ () => <UsersContainer /> }/>
            <Route path={'/login'} render={ () => <Login /> }/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
