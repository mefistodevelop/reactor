import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import AddPost from './AddPost';

function AddPostContainer(props) {

  const onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <AddPost 
      updateNewPostText={ onPostChange } 
      addPost={ addPost }
      userData={ props.userData }
      newPostText={ props.newPostText }
    />);
}

export default AddPostContainer;
