const user = {
  id: 1,
  name: 'User name',
  userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
};

const friends = [
  {
    id: 2,
    name: 'Stallone',
    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDp1qHgizNWuuDGBMfvJ9Fa1yx1MxgCi77vRCx1yZKd-4d-yld'
  },
  {
    id: 3,
    name: 'Spidey',
    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmlPDeFvNgK5-4D-WLjqItQy9QLFRMiPT7Mb3Ve2AE_HA6fWkz'
  },
  {
    id: 4,
    name: 'Batman',
    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkxEYJcaSN3Veki_4Q7m_LYgOSFF0ITdxzG4IFfGxp8_BrYdG3',
    link: 'BruceWayne',
  },
  {
    id: 5,
    name: 'Goofy Doofy',
    userpic: 'https://www.muralsticker.com/25439-thickbox/autocollants-et-vynils-disney-goofy.jpg',
    link: 'googoo',
  },
  {
    id: 6,
    name: 'Buzz Lightyear',
    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR4VFHTHU0j5LMF45COg_es5t0S3BqkcBqReA3QUCZxx00hFxF',
    link: 'spaceRanger007',
  }
];

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const store = {
  friends,
  state: {
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
    messagesPage: {
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
    },
  },

  getUser() {
    return user;
  },  

  getNewPostText() {
    return this.state.profilePage.newPostText;
  },

  getPosts() {
    return this.state.profilePage.posts;
  },

  getMessages() {
    return this.state.messagesPage.messagesStore;
  },

  getNewMessageText() {
    return this.state.messagesPage.newMessageText;
  },

  getFriends() {
    return this.friends;
  },

  getCurrentTime() {
    const today = new Date();
    const minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    return `${today.getHours()}:${minutes}`;
  },

  callSubscriber() {},

  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this.state.profilePage.newPostText = action.text;
      this.callSubscriber(this);
    }
    else if (action.type === ADD_NEW_POST) {
      const posts = this.state.profilePage.posts;
      const lastId = posts[posts.length - 1].id;
    
      posts.push({
        id: lastId + 1,
        name: user.name,
        userpic: user.userpic,
        time: this.getCurrentTime(),
        text: this.state.profilePage.newPostText,
        likes: 0,
      });
    
      this.state.profilePage.newPostText = '';
      this.callSubscriber(this);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this.state.messagesPage.newMessageText = action.text;
      this.callSubscriber();
    }
    else if (action.type === ADD_NEW_MESSAGE) {
      const messages = this.state.messagesPage.messagesStore;
      const lastId = messages[messages.length - 1].id;

      messages.push({
        id: lastId + 1,
        userpic: user.userpic,
        text: this.getNewMessageText(),
        time: this.getCurrentTime(),
        mod: 'me',
      });

      this.state.messagesPage.newMessageText = '';
      this.callSubscriber();
    }
  }
};

const addPostActionCreator = () => ({ type: ADD_NEW_POST });
const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });
const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: newText });
const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export default store;
export {
  addPostActionCreator, 
  updateNewPostTextActionCreator, 
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
};
