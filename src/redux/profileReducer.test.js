import profileReducer, { addPost, removePost, setUserStatus } from './profileReducer';
import { getCurrentTime } from './usersData';

const state = {
  getCurrentTime,
  posts: [
    {
      id: 1,
      name: 'you know my name',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGgvh223rQXiRrH1k91ftAkPXZ8rUsDYBAi_UyUgyqwGtVRBl',
      time: 'yesterday',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, cum.',
      likes: 100,
    },
    {
      id: 2,
      name: 'User name',
      userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
      time: 'yesterday',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, error porro nemo libero doloremque beatae accusamus fugiat culpa placeat perspiciatis?',
      likes: 201,
    },
  ],
  userProfile: { fullName: 'test', photos: { small: undefined } },
  userStatus: '',
};

// posts

describe('Posts length', () => {
  test('should be increased after new post is added', () => {
    const action = addPost('new post');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
  });

  test('shouldn\'t be increased if passed no text', () => {
    const action = addPost('');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });

  test('shouldn\'t be increased if passed only spaces', () => {
    const action = addPost('   ');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });

  test('shouldn\'t be increased if passed nothing', () => {
    const action = addPost();
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });

  test('should be decreased after post is removed', () => {
    const action = removePost(2);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
  });

  test('shouldn\'t be decreased if passed wrong id', () => {
    const action = removePost(20);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });
});

// status

describe('Status length', () => {
  test('should be greater than zero if passed text', () => {
    const action = setUserStatus('test status');
    const newState = profileReducer(state, action);

    expect(newState.userStatus.length).toBeGreaterThan(0);
  });

  test('should be equal zero if passed blank string', () => {
    const action = setUserStatus('');
    state.status = 'status';
    const newState = profileReducer(state, action);

    expect(newState.userStatus.length).toBe(0);
  });
});
