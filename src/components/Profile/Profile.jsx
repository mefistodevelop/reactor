import React from 'react';
import './Profile.scss';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
  // debugger;
  return (
    <main className="profile">
      <div className="profile__banner"/>
      <div className="profile__my-posts">
        <MyPosts 
          posts={ props.posts } 
          userData={ props.userData } 
          newPostText={ props.newPostText }
          updateNewPostText={ props.updateNewPostText }
          addNewPost={ props.addNewPost }
          dispatch={ props.dispatch }
        />
      </div>
      <div className="profile__mutual-friends"></div>
    </main>
  );
}

export default Profile;
