import React from 'react';
import './AddPost.scss';
import Userpic from '../../../common/Userpic/Userpic';
import { reduxForm } from 'redux-form';
import AddPostForm from './AddPostForm/AddPostForm';
import { useDispatch } from 'react-redux';

export function AddPost({ addPost, userpic }) {
  const dispatch = useDispatch();

  const onAddPost = (formData) => {
    if (formData.newPost && formData.newPost.trim()) {
      dispatch(addPost(formData.newPost.trim()));
    }
  };

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
