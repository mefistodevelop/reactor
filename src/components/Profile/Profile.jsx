import React from 'react';
import './Profile.scss';
import { MyPosts } from './MyPosts/MyPosts';
import Userpic from '../common/Userpic/Userpic';
import About from './About/About';
import Spinner from '../common/Spinner/Spinner';

function Profile(props) {
  if (!props.profile) {
    return (
      <div className="profile__spinner">
        <Spinner size="100" />
      </div>
    );
  }

  return (
    <main className="profile">
      <div className="profile__userpic">
        <Userpic path={props.profile.photos.large} size="large" />
      </div>
      <div className="profile__about">
        <About
          profile={props.profile}
          userStatus={props.userStatus}
          updateStatus={props.updateStatus}
          authorizedUserId={props.authorizedUserId}
          userId={props.userId}
        />
      </div>
      <div className="profile__my-posts">
        <MyPosts />
      </div>
    </main>
  );
}

export default Profile;
