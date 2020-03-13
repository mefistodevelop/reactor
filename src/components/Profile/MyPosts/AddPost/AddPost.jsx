import React from 'react';
import './AddPost.scss';
import Userpic from '../../../Userpic/Userpic';
import Button from '../../../Button/Button';

function AddPost(props) {

  const newPost = React.createRef();

  const getText = () => {
    return newPost.current.value;
  }

  const newPostTextOnChange = () => {
    const text = getText();
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  const addPost = () => {
    props.dispatch({ type: 'ADD-NEW-POST' });
  }

  return (
    <div className="add-post">
      <div className="add-post__userpic">
        <Userpic path={ props.userData.userpic } />
      </div>
      <div className="add-post__form">
        <textarea
          className="add-post__field"
          ref={ newPost }
          onChange={ newPostTextOnChange }
          placeholder="write something"
          value={ props.getNewPostText() }
        />
        <Button type="button" text="share" onClick={ addPost } />
      </div>
    </div>
  );
}

export default AddPost;
