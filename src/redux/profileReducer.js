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
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }

    case ADD_NEW_POST: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      const lastId = stateCopy.posts[stateCopy.posts.length - 1].id;
    
      stateCopy.posts.push({
        id: lastId + 1,
        name: stateCopy.user.name,
        userpic: stateCopy.user.userpic,
        time: stateCopy.getCurrentTime(),
        text: stateCopy.newPostText,
        likes: 0,
      });
  
      stateCopy.newPostText = '';
      return stateCopy;
    }

    default:
      return state;
  }  
}

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });

export default profileReducer;
