import React from 'react';
import './MyPosts.scss';
import { Post } from './Post/Post';
import { AddPost } from './AddPost/AddPost';
import { PostType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { StateType } from '../../../redux/reduxStore';
import { addPost } from '../../../redux/profileReducer';

export const MyPosts = () => {
  const posts = useSelector((state: StateType) => state.profilePage.posts);
  const userpic = useSelector((state: StateType) => state.auth.userPhotos.small);

  const myPosts = posts
    .map((post: PostType) => (
      <Post
        key={post.id}
        name={post.name}
        userpic={post.userpic}
        time={post.time}
        text={post.text}
        likes={post.likes}
      />
    ))
    .reverse();

  return (
    <div className="my-posts">
      <div className="my-posts__add-post">
        <AddPost addPost={addPost} userpic={userpic} />
      </div>

      {myPosts}
    </div>
  );
};
