import messagesReducer, { addMessage } from './messagesReducer';
import { getCurrentTime, getUser, getFriends } from './usersData';

const state = {
  getCurrentTime,
  friends: getFriends(),
  user: getUser(),
  messagesStore: [
    {
      id: 1,
      text: 'Yo',
      time: '21: 34',
    },
    {
      id: 2,
      text: 'What\'s up',
      time: '21: 34',
    },
  ],
};

describe('messagesStore length', () => {
  test('should be increased after new message is added', () => {
    const action = addMessage('test');
    const newState = messagesReducer(state, action);
    expect(newState.messagesStore.length).toBe(3);
  });

  test('shouldn\'t be increased if passed blank message', () => {
    const action = addMessage('');
    const newState = messagesReducer(state, action);
    expect(newState.messagesStore.length).toBe(2);
  });

  test('shouldn\'t be increased if passed nothing', () => {
    const action = addMessage();
    const newState = messagesReducer(state, action);
    expect(newState.messagesStore.length).toBe(2);
  });

  test('shouldn\'t be increased if passed only spaces', () => {
    const action = addMessage('      ');
    const newState = messagesReducer(state, action);
    expect(newState.messagesStore.length).toBe(2);
  });
});
