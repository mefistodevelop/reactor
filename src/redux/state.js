const user = {
  id: 1,
  name: 'User name',
  userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
};

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const store = {
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
      this.state.profilePage.newPostText = action.newText;
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
  }

};

export default store;
