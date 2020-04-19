import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const  authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA, 
  data: { id, email, login, isAuth }
});

export const getAuthData = () => {
  return (dispatch) => {
    return authApi
      .getAuthData()
      .then((response) => {
        if (response.resultCode === 0) {
          const { id, email, login } = response.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      });
  };
}

export const signIn = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi
      .login(email, password, rememberMe)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(getAuthData());
        } else {
          const message = (response.messages.length > 0) 
            ? response.messages[0]
            : 'Something wrong';
          const action = stopSubmit('login', { _error: message});
          dispatch(action);
        }
      });
  }
}

export const signOut = () => {
  return (dispatch) => {
    authApi
      .logout()
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      });
  }
}

export default authReducer;
