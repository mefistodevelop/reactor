import React from 'react';
import './Profile.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Userpic from '../common/Userpic/Userpic';
import About from './About/About';
import Spinner from '../common/Spinner/Spinner';

function Profile(props) {

  if (!props.profile) {
    return <Spinner />
  }

  return (
    <main className="profile">
      <div className="profile__userpic">
        <Userpic path={ props.profile.photos.large } size='large' />
      </div>
      <div className="profile__about">
        <About profile={ props.profile } userStatus={ props.userStatus } />
      </div>
      <div className="profile__my-posts">
        <MyPostsContainer />
      </div>
    </main>
  );
}

export default Profile;
