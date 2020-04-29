import React from 'react';
import './AddPost.scss';
import Userpic from '../../../common/Userpic/Userpic';
import { reduxForm } from 'redux-form';
import AddPostForm from './AddPostForm/AddPostForm';

function AddPost({ addPost, userpic }) {

  const onAddPost = (formData) => {
    addPost(formData.newPost);
  }

  const AddPostReduxForm = reduxForm({ form: 'newPost' })(AddPostForm);

  return (
    <div className="add-post">
      <div className="add-post__userpic">
        <Userpic path={userpic} />
      </div>
      <div className="add-post__form">
        <AddPostReduxForm onSubmit={onAddPost} />
      </div>
    </div>
  );
}

export default AddPost;
