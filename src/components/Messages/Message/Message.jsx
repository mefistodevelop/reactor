import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';
import Userpic from '../../common/Userpic/Userpic';

function Message({ mod, userpic, text, time }) {
  const messageMod = mod ? ` message_${mod}` : '';
  const userpicMod = mod ? ` message__userpic_${mod}` : '';
  const bubbleMod = mod ? ` message__bubble_${mod}` : '';

  return (
    <div className={`message ${messageMod}`}>
      <div className={`message__userpic ${userpicMod}`}>
        <Userpic path={userpic} />
      </div>

      <div className={`message__bubble ${bubbleMod}`}>
        <p className="message__text">
          {text}
        </p>
        <span className="message__time">
          {time}
        </span>
      </div>
    </div>
  );
}

Message.propTypes = {
  mod: PropTypes.string,
  userpic: PropTypes.string,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

Message.defaultProps = {
  mod: '',
  userpic: '',
};

export default Message;
