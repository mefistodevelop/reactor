import React from 'react';
import './Profile.scss';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
  return (
    <main className="profile">
      <div className="profile__banner"/>
      <div className="profile__my-posts">
        <MyPosts />
      </div>
      <div className="profile__mutual-friends"></div>
    </main>
  );
}

export default Profile;
