import React from 'react';
import './Message.scss';
import Userpic from '../../common/Userpic/Userpic';

type MessageType = {
  mod: string;
  userpic: string;
  text: string;
  time: string;
};

export function Message({ mod, userpic, text, time }: MessageType) {
  const messageMod = mod ? ` message_${mod}` : '';
  const userpicMod = mod ? ` message__userpic_${mod}` : '';
  const bubbleMod = mod ? ` message__bubble_${mod}` : '';

  return (
    <div className={`message ${messageMod}`}>
      <div className={`message__userpic ${userpicMod}`}>
        <Userpic path={userpic} />
      </div>

      <div className={`message__bubble ${bubbleMod}`}>
        <p className="message__text">{text}</p>
        <span className="message__time">{time}</span>
      </div>
    </div>
  );
}
