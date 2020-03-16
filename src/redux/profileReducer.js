import { getUser, getCurrentTime } from "./usersData";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const user = getUser();

const initialState = {
  getCurrentTime: getCurrentTime,
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
};

function profileReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;

    case ADD_NEW_POST:
      const posts = state.posts;
      const lastId = posts[posts.length - 1].id;
    
      posts.push({
        id: lastId + 1,
        name: state.user.name,
        userpic: state.user.userpic,
        time: state.getCurrentTime(),
        text: state.newPostText,
        likes: 0,
      });
  
      state.newPostText = '';
      return state;

    default:
      return state;
  }  
}

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });

export default profileReducer;
