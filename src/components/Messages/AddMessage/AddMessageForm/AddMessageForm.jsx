import React from 'react';
import './AddMessageForm.scss'
import { Field } from 'redux-form';
import Button from '../../../Button/Button';

const AddMessageForm = (props) => {
  return (
    <form className="addMessage-form" onSubmit={ props.handleSubmit }>
      <Field className="addMessage-form__field"
        component="textarea"
        name="newMessageText"
        placeholder="Text Message"
      />
      <div className="addMessage-form__button">
        <Button type="submit" text="Send" />
      </div>
    </form>
  );
}

export default AddMessageForm;
