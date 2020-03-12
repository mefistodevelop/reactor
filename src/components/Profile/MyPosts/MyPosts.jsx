import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

function MyPosts(props) {

  const myPosts = props.posts.map((post) => {
    return (
      <Post 
        key={ post.id }
        name={ post.name }
        userpic={ post.userpic }
        time={ post.time }
        text={ post.text }
        likes={ post.likes }
      />
    );
  });

  return (
    <div className="my-posts">
      { myPosts }
    </div>
  );
}

export default MyPosts;
