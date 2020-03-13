let callSubscriber = () => '';

const user = {
  id: 1,
  name: 'User name',
  userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
};

const getUser = () => {
  return user;
}

const state = {
  profilePage: {
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
        name: user.name,
        userpic: user.userpic,
        time: 'yesterday',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, error porro nemo libero doloremque beatae accusamus fugiat culpa placeat perspiciatis?',
        likes: 201,
      },
    ],
    newPostText: '',
  },
};

const getNewPostText = () => {
  return state.profilePage.newPostText;
}

const getPosts = () => {
  return state.profilePage.posts;
}

const getCurrentTime = () => {
  const today = new Date();
  const minutes = (today.getMinutes() < 10 ? 0 : '') + today.getMinutes();
  return `${today.getHours()}:${minutes}`;
}

const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  callSubscriber(state);
}

const addNewPost = (postText) => {
  const posts = state.profilePage.posts;
  const lastId = posts[posts.length - 1].id;

  posts.push({
    id: lastId + 1,
    name: user.name,
    userpic: user.userpic,
    time: getCurrentTime(),
    text: postText,
    likes: 0,
  });

  state.profilePage.newPostText = '';
  callSubscriber(state);
}

const subscribe = (observer) => {
  callSubscriber = observer;
}

export default state;
export { getUser, updateNewPostText, subscribe, getNewPostText, getPosts, addNewPost };
window.state = state;