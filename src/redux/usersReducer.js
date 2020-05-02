import { usersApi } from '../api/api';

const FOLLOW = 'reactor/users/FOLLOW';
const UNFOLLOW = 'reactor/users/UNFOLLOW';
const SET_USERS = 'reactor/users/SET-USERS';
const SET_CURRENT_PAGE = 'reactor/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'reactor/users/SET-TOTAL-USERS-COUNT';
const SET_IS_FETCHING = 'reactor/users/SET-IS-FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'reactor/users/SET_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

function usersReducer(state = initialState, action) {
  const followUser = (follow) => ({
    ...state,
    users: state.users.map((user) => {
      if (action.userID === user.id) {
        return { ...user, followed: follow };
      }
      return user;
    }),
  });

  switch (action.type) {
    case FOLLOW:
      return followUser(true);

    case UNFOLLOW:
      return followUser(false);

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };

    default:
      return state;
  }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setIsFetching = (isFetching) => ({ isFetching, type: SET_IS_FETCHING });
export const setFollowingInProgress = (inProgress, id) => ({
  inProgress,
  id,
  type: SET_FOLLOWING_IN_PROGRESS,
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));

  const response = await usersApi.getUsers(page, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(setCurrentPage(page));
};


const toggleFollow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setFollowingInProgress(true, id));
  const response = await apiMethod(id);

  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setFollowingInProgress(false, id));
};


export const follow = (id) => (dispatch) => {
  toggleFollow(dispatch, id, usersApi.followUser.bind(usersApi), followSuccess);
};

export const unfollow = (id) => (dispatch) => {
  toggleFollow(dispatch, id, usersApi.unfollowUser.bind(usersApi), unfollowSuccess);
};

export default usersReducer;
