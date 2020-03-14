const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

function messagesReducer(state, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.messagesPage.newMessageText = action.text;
      return state.messagesPage;
    
    case ADD_NEW_MESSAGE:
      const messages = state.messagesPage.messagesStore;
      const lastId = messages[messages.length - 1].id;

      messages.push({
        id: lastId + 1,
        userpic: state.messagesPage.user.userpic,
        text: state.messagesPage.newMessageText,
        time: state.getCurrentTime(),
        mod: 'me',
      });

      state.messagesPage.newMessageText = '';
      return state.messagesPage;
    
    default:
      return state.messagesPage;
  }  
}

export const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: newText });
export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export default messagesReducer;
