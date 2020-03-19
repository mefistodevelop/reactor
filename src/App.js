import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';

function App(props) {

  const profileData = <Profile />;
  const messagesData = <MessagesContainer />;

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Navbar />
        <div className="content">
          <Route path={'/profile'} render={() => profileData} />
          <Route path={'/messages'} render={() => messagesData} />
        </div>
      </div>
    </div>
  );
}

export default App;
