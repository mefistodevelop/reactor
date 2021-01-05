import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Messages } from './components/Messages/Messages';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Header } from './components/Header/Header';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import Spinner from './components/common/Spinner/Spinner';
import { Users } from './components/Users/Users';
import { StateType } from './redux/reduxStore';

type Props = {
  initialized: boolean;
  initializeApp: () => void;
};

class App extends React.Component<Props> {
  componentDidMount = () => {
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
        <Header />
        <div className="content-wrapper">
          <Navbar />
          <div className="content">
            <Route exact path="/" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <Messages />} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
