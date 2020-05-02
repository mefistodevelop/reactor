import { stopSubmit } from 'redux-form';
import { authApi, profileApi } from '../api/api';

const SET_USER_DATA = 'reactor/auth/SET-USER-DATA';
const SET_USER_PHOTOS = 'reactor/auth/SET_USER_PHOTOS';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  userPhotos: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case SET_USER_PHOTOS:
      return {
        ...state,
        userPhotos: action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    id, email, login, isAuth,
  },
});

const setUserPhotos = (payload) => ({ payload, type: SET_USER_PHOTOS });

export const getAuthData = () => async (dispatch) => {
  const response = await authApi.getAuthData();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));

    const profileResponse = await profileApi.getUserProfile(id);

    if (profileResponse.resultCode === 0) {
      dispatch(setUserPhotos(profileResponse.photos));
    }
  }
};

export const signIn = (email, password, rememberMe) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    const message = (response.messages.length > 0)
      ? response.messages[0]
      : 'Something wrong';
    const action = stopSubmit('login', { _error: message });
    dispatch(action);
  }
};

export const signOut = () => async (dispatch) => {
  const response = await authApi.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(setUserPhotos([]));
  }
};

export default authReducer;
