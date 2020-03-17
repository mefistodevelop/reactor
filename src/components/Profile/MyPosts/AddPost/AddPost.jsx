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
    props.updateNewPostText(text);
  }

  const onAddPost = () => {
    props.addPost();
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
          value={ props.newPostText }
        />
        <Button type="button" text="share" onClick={ onAddPost } />
      </div>
    </div>
  );
}

export default AddPost;
