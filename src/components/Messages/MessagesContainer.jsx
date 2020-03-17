import React from 'react';
import Messages from './Messages';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/messagesReducer';

function MessagesContainer(props) {

  const state = props.store.getState();

  const onNewMessageChange = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  }

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  return (
    <Messages 
      updateNewMessageText={ onNewMessageChange }
      addMessage={ addMessage }
      state={ state }
    />
  );
}

export default MessagesContainer;
