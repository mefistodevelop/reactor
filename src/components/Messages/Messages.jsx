import React from 'react';
import './Messages.scss';
import Message from './Message/Message';
import DialogCard from './DialogCard/DialogCard';
import AddMessage from './AddMessage/AddMessage';

function Messages(props) {

  const dialogsList = props.messagesPage.friends;
  const messagesStore = props.messagesPage.messagesStore;

  const dialogs = dialogsList.map((dialog) => {
    return (
      <li className="dialogs__item" key={ dialog.id }>
        <DialogCard
          userpic={ dialog.userpic }
          name={ dialog.name }
          link={ dialog.link }
        />
      </li>
    );
  });

  const chat = messagesStore.map((message) => {
    return (
      <Message 
        key = { message.id }
        userpic={ message.userpic }
        text={ message.text }
        time={ message.time }
        mod={ message.mod }
      />
    );
  });

  return (
    <main className="messages">
      <div className="messages__dialogs">
        <ul className="messages__dialogs-list">
          { dialogs }
        </ul>
      </div>

      <div className="messages__chat">
        { chat }

        <div className="messages__add-message">
          <AddMessage addMessage={ props.addMessage } />
        </div>
      </div>
    </main>
  );
}

export default Messages;