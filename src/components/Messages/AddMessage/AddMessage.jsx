import React from 'react';
import './AddMessage.scss';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import { useDispatch } from 'react-redux';

function AddMessage({ addMessage }) {
  const dispatch = useDispatch();

  const addNewMessage = (formData) => {
    if (formData.newMessageText && formData.newMessageText.trim()) {
      dispatch(addMessage(formData.newMessageText));
    }
  };

  const AddMessageReduxForm = reduxForm({ form: 'newMessage' })(AddMessageForm);

  return (
    <div className="add-message">
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
}

AddMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default AddMessage;
