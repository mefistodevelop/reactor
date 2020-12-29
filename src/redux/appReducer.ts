import { getAuthData } from './authReducer';

const INITIALIZE_SUCCESS = 'reactor/app/INITIALIZE_SUCCESS';

type InitialStateType = {
  initialized: boolean;
};

const initialState: InitialStateType = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type InitializeSuccessType = {
  type: typeof INITIALIZE_SUCCESS;
};

const initializeSuccess = (): InitializeSuccessType => ({
  type: INITIALIZE_SUCCESS,
});

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(getAuthData());
  dispatch(initializeSuccess());
};
