import { getCurrentTime } from "./usersData";
import { profileApi } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  getCurrentTime: getCurrentTime,
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
  userProfile: null,
  userStatus: '',
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_POST:
      const lastId = state.posts[state.posts.length - 1].id;
      
      const newPost = {
        id: lastId + 1,
        name: state.userProfile.fullName,
        userpic: state.userProfile.photos.small,
        time: state.getCurrentTime(),
        text: action.post,
        likes: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
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

export const addPost = (post) => ({ post, type: ADD_NEW_POST });
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

export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi
      .updateUserStatus(status)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(status));
        }
      });
  };
}

export default profileReducer;
