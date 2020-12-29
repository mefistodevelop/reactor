import { stopSubmit } from 'redux-form';
import { authApi, profileApi } from '../api/api';

const SET_USER_DATA = 'reactor/auth/SET-USER-DATA';
const SET_USER_PHOTOS = 'reactor/auth/SET_USER_PHOTOS';

type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  userPhotos: Array<string>;
};

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  userPhotos: [],
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  data: SetAuthUserDataPayloadType;
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  data: {
    id,
    email,
    login,
    isAuth,
  },
});

type SetUserPhotosType = {
  type: typeof SET_USER_PHOTOS;
  payload: Array<string>;
};

const setUserPhotos = (payload: Array<string>): SetUserPhotosType => ({
  payload,
  type: SET_USER_PHOTOS,
});

export const getAuthData = () => async (dispatch: any) => {
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

export const signIn = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  const { resultCode, messages } = await authApi.login(
    email,
    password,
    rememberMe
  );

  if (resultCode !== 0) {
    const message: string =
      messages.length > 0 ? messages[0] : 'Something wrong';
    const action = stopSubmit('login', { _error: message });
    return dispatch(action);
  }

  dispatch(getAuthData());
};

export const signOut = () => async (dispatch: any) => {
  const response = await authApi.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(setUserPhotos([]));
  }
};

export default authReducer;
