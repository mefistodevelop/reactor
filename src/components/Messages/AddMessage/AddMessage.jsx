import React from 'react';
import './AddMessage.scss';
import Button from '../../Button/Button';

function AddMessage(props) {

  const onNewMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
  }

  const addNewMessage = () => {
    props.addMessage();
  }

  return (
    <div className="add-message">
      <textarea 
        className="add-message__field"
        placeholder="Text Message"
        value={ props.newMessageText }
        onChange={ onNewMessageChange }
      />
      <div className="add-message__button">
        <Button className="button" type="button" text="Send" onClick={ addNewMessage } />
      </div>
    </div>
  );
}

export default AddMessage;
