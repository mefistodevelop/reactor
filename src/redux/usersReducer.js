import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.userID === user.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.userID === user.id) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

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
  type: SET_FOLLOWING_IN_PROGRESS
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersApi.getUsers(page, pageSize)
      .then((response) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setCurrentPage(page));
      });
  };
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersApi.followUser(id)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(followSuccess(id));
        }
        dispatch(setFollowingInProgress(false, id));
      });
  };
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersApi.unfollowUser(id)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(unfollowSuccess(id));
        }
        dispatch(setFollowingInProgress(false, id));
      });
  };
}

export default usersReducer;
