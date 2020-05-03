import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Messages.scss';
import Message from './Message/Message';
import DialogCard from './DialogCard/DialogCard';
import AddMessage from './AddMessage/AddMessage';

function Messages({ messagesPage: { friends, messagesStore }, addMessage }) {
  const dialogs = friends.map((dialog) => (
    <li className="dialogs__item" key={dialog.id}>
      <DialogCard
        userpic={dialog.userpic}
        name={dialog.name}
        link={dialog.link}
      />
    </li>
  ));

  const chat = messagesStore.map((message) => (
    <Message
      key={message.id}
      userpic={message.userpic}
      text={message.text}
      time={message.time}
      mod={message.mod}
    />
  ));

  const chatBottom = createRef();

  useEffect(() => {
    chatBottom.current.scrollIntoView();
  });

  return (
    <main className="messages">
      <div className="messages__dialogs">
        <ul className="messages__dialogs-list">
          {dialogs}
        </ul>
      </div>

      <div className="messages__chat">
        {chat}
        <div className="messages__bottom-anchor" ref={chatBottom} />

        <div className="messages__add-message">
          <AddMessage addMessage={addMessage} />
        </div>
      </div>
    </main>
  );
}

Messages.defaultProps = {
  friends: [],
  messagesStore: [],
};

Messages.propTypes = {
  messagesPage: PropTypes.objectOf(PropTypes.any).isRequired,
  friends: PropTypes.arrayOf(PropTypes.object),
  messagesStore: PropTypes.arrayOf(PropTypes.object),
  addMessage: PropTypes.func.isRequired,
};

export default Messages;
