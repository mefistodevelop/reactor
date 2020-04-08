import { getCurrentTime, getUser, getFriends } from './usersData';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const user = getUser();
const friends = getFriends();

const initialState = {
  getCurrentTime: getCurrentTime,
  friends,
  user,
  messagesStore: [
    { 
      id: 1, 
      text: 'Yo', 
      userpic: friends[0].userpic,
      time: '21: 34',
    },
    { 
      id: 2, 
      text: 'What\'s up', 
      userpic: friends[0].userpic,
      time: '21: 34',
    },
    { 
      id: 3, 
      text: 'Go to party! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi non numquam tempore? Dolores eaque quod possimus magnam ullam accusantium odit!',
      userpic: friends[0].userpic,
      time: '21:35',
    },
    {
      id: 4,
      text: 'Yo! i\'m in!',
      userpic: user.userpic,
      mod: 'me',
      time: '21:40',
    },
  ],
  newMessageText: '',
};

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };
    
    case ADD_NEW_MESSAGE:
      const lastId = state.messagesStore[state.messagesStore.length - 1].id;
      
      const newMessage = {
        id: lastId + 1,
        userpic: state.user.userpic,
        text: state.newMessageText,
        time: state.getCurrentTime(),
        mod: 'me',
      };

      return {
        ...state,
        messagesStore: [...state.messagesStore, newMessage],
        newMessageText: '',
      };
    
    default:
      return state;
  }  
}

export const updateNewMessageText = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, 
  text: newText,
});
export const addMessage = () => ({ type: ADD_NEW_MESSAGE });

export default messagesReducer;
