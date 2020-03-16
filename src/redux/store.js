import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import { getUser, getFriends } from "./usersData";


const user = getUser();
const friends = getFriends();


const store = {
  friends,
  state: {
    profilePage: {
      user,
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
    
    this.state.profilePage = profileReducer({
      getCurrentTime: this.getCurrentTime,
      profilePage: this.state.profilePage,
    }, action);

    this.state.messagesPage = messagesReducer({
      getCurrentTime: this.getCurrentTime,
      messagesPage: this.state.messagesPage,
    }, action);

    this.callSubscriber();

  }
};

export default store;
