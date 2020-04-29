import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
import AddPost from './AddPost/AddPost';

const MyPosts = ({ posts, userpic, addPost }) => {
  const myPosts = posts.map((post) => (
    <Post
      key={post.id}
      name={post.name}
      userpic={post.userpic}
      time={post.time}
      text={post.text}
      likes={post.likes}
    />
  )).reverse();

  return (
    <div className="my-posts">
      <div className="my-posts__add-post">
        <AddPost
          addPost={addPost}
          userpic={userpic}
        />
      </div>

      {myPosts}
    </div>
  );
};

export default MyPosts;
