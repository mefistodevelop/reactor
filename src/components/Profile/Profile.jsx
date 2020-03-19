import React from 'react';
import './Profile.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <main className="profile">
      <div className="profile__banner"/>
      <div className="profile__my-posts">
        <MyPostsContainer />
      </div>
      <div className="profile__mutual-friends"></div>
    </main>
  );
}

export default Profile;
