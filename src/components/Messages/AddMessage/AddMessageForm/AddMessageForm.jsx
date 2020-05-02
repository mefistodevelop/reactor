import React from 'react';
import PropTypes from 'prop-types';
import './AddMessageForm.scss';
import { Field } from 'redux-form';
import Button from '../../../Button/Button';

const AddMessageForm = ({ handleSubmit }) => (
  <form className="addMessage-form" onSubmit={handleSubmit}>
    <Field
      className="addMessage-form__field"
      component="textarea"
      name="newMessageText"
      placeholder="Text Message"
    />
    <div className="addMessage-form__button">
      <Button type="submit" text="Send" />
    </div>
  </form>
);

AddMessageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddMessageForm;
