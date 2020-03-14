import React from 'react';
import './AddMessage.scss';
import Button from '../../Button/Button';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/messagesReducer';

function AddMessage(props) {

  const newMessage = React.createRef();

  const onNewMessageChange = () => {
    const text = newMessage.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  const addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className="add-message">
      <textarea 
        className="add-message__field"
        placeholder="Text Message"
        ref={ newMessage }
        value={ props.getNewMessageText() }
        onChange={ onNewMessageChange }
      />
      <div className="add-message__button">
        <Button className="button" type="button" text="Send" onClick={ addNewMessage } />
      </div>
    </div>
  );
}

export default AddMessage;
