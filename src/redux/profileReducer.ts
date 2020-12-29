import { getCurrentTime } from './usersData';
import { profileApi } from '../api/api';
import { PhotosType } from '../types/types';

const ADD_NEW_POST = 'reactor/profile/ADD-NEW-POST';
const SET_USER_PROFILE = 'reactor/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'reactor/profile/SET_USER_STATUS';
const REMOVE_POST = 'reactor/profile/REMOVE_POST';

type PostType = {
  id: number;
  name: string;
  userpic: string | null;
  time: string;
  text: string;
  likes: number;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfileType = {
  userId: number;
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: ContactsType;
  photos: PhotosType;
};

const initialState = {
  getCurrentTime,
  posts: [
    {
      id: 1,
      name: 'you know my name',
      userpic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGgvh223rQXiRrH1k91ftAkPXZ8rUsDYBAi_UyUgyqwGtVRBl',
      time: 'yesterday',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, cum.',
      likes: 100,
    },
    {
      id: 2,
      name: 'User name',
      userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
      time: 'yesterday',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, error porro nemo libero doloremque beatae accusamus fugiat culpa placeat perspiciatis?',
      likes: 201,
    },
  ] as Array<PostType>,
  userProfile: null as ProfileType | null,
  userStatus: '',
};

export function profileReducer(state = initialState, action: any): typeof initialState {
  switch (action.type) {
    case ADD_NEW_POST:
      if (!action.post || !action.post.trim()) return state;
      if (!state.userProfile) return state;

      const lastId = state.posts[state.posts.length - 1].id;

      const newPost: PostType = {
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

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };

    default:
      return state;
  }
}

type AddPostType = {
  type: typeof ADD_NEW_POST;
  post: string;
};

export const addPost = (post: string): AddPostType => ({ post, type: ADD_NEW_POST });

type SetProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setProfile = (profile: ProfileType): SetProfileType => ({
  profile,
  type: SET_USER_PROFILE,
});

type RemovePostType = {
  type: typeof REMOVE_POST;
  id: number;
};

export const removePost = (id: number): RemovePostType => ({ id, type: REMOVE_POST });

type SetUserStatusType = {
  type: typeof SET_USER_STATUS;
  status: string;
};

export const setUserStatus = (status: string): SetUserStatusType => ({
  status,
  type: SET_USER_STATUS,
});

export const setUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileApi.getUserProfile(userId);
  dispatch(setProfile(response));
};

export const getUserStatus = (id: number) => async (dispatch: any) => {
  const response = await profileApi.getUserStatus(id);
  dispatch(setUserStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileApi.updateUserStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
