import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
import AddPost from './AddPost/AddPost';

function MyPosts(props) {
  const myPosts = props.profilePage.posts.map((post) => {
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
      <div className="my-posts__add-post">
        <AddPost
          addPost={ props.addPost }
          userData={ props.profilePage.user } 
        />
      </div>
      
      { myPosts }
    </div>
  );
}

export default MyPosts;
