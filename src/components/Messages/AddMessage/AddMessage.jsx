import React from 'react';
import './AddMessage.scss';
import { reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm/AddMessageForm';

function AddMessage(props) {

  const addNewMessage = (formData) => {
    props.addMessage(formData.newMessageText);
  }

  const AddMessageReduxForm = reduxForm({ form: 'newMessage' })(AddMessageForm);

  return (
    <div className="add-message">
      <AddMessageReduxForm onSubmit={ addNewMessage } />
    </div>
  );
}

export default AddMessage;
