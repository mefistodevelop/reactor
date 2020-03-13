import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import state, { getUser, updateNewPostText, subscribe, getNewPostText, getPosts, addNewPost } from './redux/state';

const rerenderEverything = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        posts={ getPosts() }
        userData={ getUser() } 
        state={ state }
        updateNewPostText={ updateNewPostText }
        getNewPostText={ getNewPostText }
        addNewPost={ addNewPost }
      />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEverything(state);
subscribe(rerenderEverything);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
