import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';

function App(props) {

  const profileData = <Profile
    posts={ props.store.getPosts() } 
    userData={ props.store.getUser() }
    getNewPostText={ props.store.getNewPostText.bind(props.store) }
    dispatch={ props.store.dispatch.bind(props.store) }
  />;

  const messagesData = <Messages 
    messagesStore={ props.store.getMessages() }
    dialogsList={ props.store.getFriends() }
    dispatch={ props.store.dispatch.bind(props.store) }
    getNewMessageText={ props.store.getNewMessageText.bind(props.store) }
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
