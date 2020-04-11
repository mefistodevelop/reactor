import { getUser, getCurrentTime } from "./usersData";
import { profileApi } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
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
  userProfile: null,
  userStatus: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };

    case ADD_NEW_POST:
      const lastId = state.posts[state.posts.length - 1].id;
      
      const newPost = {
        id: lastId + 1,
        name: state.user.name,
        userpic: state.user.userpic,
        time: state.getCurrentTime(),
        text: state.newPostText,
        likes: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.status,
      };

    default:
      return state;
  }  
}

export const addPost = () => ({ type: ADD_NEW_POST });
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });
export const setProfile = (profile) => ({ profile, type: SET_USER_PROFILE, });
const setUserStatus = (status) => ({ status, type: SET_USER_STATUS });

export const setUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getUserProfile(userId)
      .then((response) => {
        dispatch(setProfile(response));
      });
  };
};

export const getUserStatus = (id) => {
  return (dispatch) => {
    profileApi
      .getUserStatus(id)
      .then((response) => {
        dispatch(setUserStatus(response.data));
      });
  }
}; 

export default profileReducer;
