import { getCurrentTime, getUser, getFriends } from './usersData';

const ADD_NEW_MESSAGE = 'reactor/messages/ADD-NEW-MESSAGE';
const user = getUser();
const friends = getFriends();

const initialState = {
  getCurrentTime,
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
};

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      if (!action.message || !action.message.trim()) return state;

      const lastId = state.messagesStore[state.messagesStore.length - 1].id;
      const newMessage = {
        id: lastId + 1,
        userpic: state.user.userpic,
        text: action.message.trim(),
        time: state.getCurrentTime(),
        mod: 'me',
      };

      return {
        ...state,
        messagesStore: [...state.messagesStore, newMessage],
      };

    default:
      return state;
  }
}

export const addMessage = (message) => ({ message, type: ADD_NEW_MESSAGE });

export default messagesReducer;
