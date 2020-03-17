import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';

function App(props) {
  const state = props.store.getState();
  const profileData = <Profile
    posts={ state.profilePage.posts } 
    userData={ state.profilePage.user }
    newPostText={ state.profilePage.newPostText }
    dispatch={ props.store.dispatch.bind(props.store) }
  />;

  const messagesData = <MessagesContainer store={ props.store } />;

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
