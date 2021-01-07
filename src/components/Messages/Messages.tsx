import React, { useEffect, useRef } from 'react';
import './Messages.scss';
import { useSelector } from 'react-redux';
import { Message } from './Message/Message';
import { DialogCard } from './DialogCard/DialogCard';
import AddMessage from './AddMessage/AddMessage';
import { addMessage } from '../../redux/messagesReducer';
import { StateType } from '../../redux/reduxStore';
import { DialogUserType, MessageType } from '../../types/types';
import { Redirect } from 'react-router';

export function Messages() {
  const { friends, messagesStore } = useSelector(
    (state: StateType) => state.messagesPage
  );
  const { isAuth } = useSelector((state: StateType) => state.auth);

  const dialogs = friends.map((dialog: DialogUserType) => (
    <li className="dialogs__item" key={dialog.id}>
      <DialogCard userpic={dialog.userpic} name={dialog.name} link={dialog.link} />
    </li>
  ));

  const chat = messagesStore.map((message: MessageType) => (
    <Message
      key={message.id}
      userpic={message.userpic}
      text={message.text}
      time={message.time}
      mod={message.mod}
    />
  ));

  const chatBottom: any = useRef(null);

  useEffect(() => {
    if (isAuth) chatBottom.current.scrollIntoView();
  });

  if (!isAuth) return <Redirect to="/login" />;

  return (
    <main className="messages">
      <div className="messages__dialogs">
        <ul className="messages__dialogs-list">{dialogs}</ul>
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
