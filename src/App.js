import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="content-wrapper">
        <Navbar />
        <div className="content">
          <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> }/>
          <Route path={'/messages'} render={ () => <MessagesContainer /> }/>
          <Route path={'/users'} render={ () => <UsersContainer /> }/>
        </div>
      </div>
    </div>
  );
}

export default App;
