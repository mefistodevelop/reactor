import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { profileReducer } from './profileReducer';
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;

export type StateType = ReturnType<RootReducerType>;

//  @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
