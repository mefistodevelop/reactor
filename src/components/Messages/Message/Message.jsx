import React from 'react';
import './Message.scss';
import Userpic from '../../common/Userpic/Userpic';

function Message(props) {

  const messageMod = props.mod ? ' message_'+ props.mod : '';
  const userpicMod = props.mod ? ' message__userpic_'+ props.mod : '';
  const bubbleMod = props.mod ? ' message__bubble_'+ props.mod : '';

  return (
    <div className={`message ${messageMod}`}>
      <div className={`message__userpic ${userpicMod}`}>
        <Userpic path={ props.userpic } />
      </div>
      
      <div className={`message__bubble ${bubbleMod}`}>
        <p className='message__text'>
          { props.text }
        </p>
        <span className='message__time'>
          { props.time }
        </span>
      </div>
    </div>
  );
}

export default Message;
