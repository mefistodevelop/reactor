import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';

function App(props) {
  const state = props.store.getState();
  const profileData = <Profile
    posts={ state.profilePage.posts } 
    userData={ state.profilePage.user }
    newPostText={ state.profilePage.newPostText }
    dispatch={ props.store.dispatch.bind(props.store) }
  />;

  const messagesData = <Messages 
    messagesStore={ state.messagesPage.messagesStore }
    dialogsList={ state.messagesPage.friends }
    dispatch={ props.store.dispatch.bind(props.store) }
    newMessageText={ state.messagesPage.newMessageText }
  />;

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
