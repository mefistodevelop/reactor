import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Navbar />
        <div className="content">
          <Route path={'/profile'} render={() => <Profile posts={ props.posts } />}/>
          <Route path={'/messages'} render={() => <Messages />}/>
        </div>
      </div>
    </div>
  );
}

export default App;
