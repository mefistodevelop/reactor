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
    updateNewPostText={ props.store.updateNewPostText.bind(props.store) }
    getNewPostText={ props.store.getNewPostText.bind(props.store) }
    addNewPost={ props.store.addNewPost.bind(props.store) }
  />

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Navbar />
        <div className="content">
          <Route path={'/profile'} render={() => profileData} />
          <Route path={'/messages'} render={() => <Messages />}/>
        </div>
      </div>
    </div>
  );
}

export default App;
