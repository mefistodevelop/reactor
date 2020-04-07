import { authApi } from "../api/api";

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
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA, 
  data: { id, email, login } 
});

export const getAuthData = () => {
  return (dispatch) => {
    authApi
      .getAuthData()
      .then((response) => {
        if (response.resultCode === 0) {
          const { id, email, login } = response.data;
          dispatch(setAuthUserData(id, email, login));
        }
      });
  };
}

export default authReducer;
