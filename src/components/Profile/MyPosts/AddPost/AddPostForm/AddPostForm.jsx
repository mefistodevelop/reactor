import React from 'react';
import './AddPostForm.scss';
import { Field } from 'redux-form';
import Button from '../../../../Button/Button';

function AddPostForm(props) {

  return (
    <form className="addPost-form" onSubmit={ props.handleSubmit }>
      <Field className="addPost-form__field"
        component="textarea"
        name="newPost"
        placeholder="write something"
      />
      <div className="addPost-form__button">
        <Button type="submit" text="share" />
      </div>
    </form>
  );
}

export default AddPostForm;
