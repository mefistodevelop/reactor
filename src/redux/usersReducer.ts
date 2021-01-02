import { usersApi } from '../api/api';
import { UserType } from '../types/types';

const FOLLOW = 'reactor/users/FOLLOW';
const UNFOLLOW = 'reactor/users/UNFOLLOW';
const SET_USERS = 'reactor/users/SET-USERS';
const SET_CURRENT_PAGE = 'reactor/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'reactor/users/SET-TOTAL-USERS-COUNT';
const SET_IS_FETCHING = 'reactor/users/SET-IS-FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'reactor/users/SET_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};

export function usersReducer(state = initialState, action: any): typeof initialState {
  const followUser = (IsFollowed: boolean) => ({
    ...state,
    users: state.users.map((user) => {
      if (action.userID === user.id) {
        return { ...user, followed: IsFollowed };
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

type FollowSuccessType = {
  type: typeof FOLLOW;
  userID: number;
};

export const followSuccess = (userID: number): FollowSuccessType => ({
  userID,
  type: FOLLOW,
});

type UnfollowSuccessType = {
  type: typeof UNFOLLOW;
  userID: number;
};

export const unfollowSuccess = (userID: number): UnfollowSuccessType => ({
  userID,
  type: UNFOLLOW,
});

type SetUsers = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export const setUsers = (users: Array<UserType>): SetUsers => ({
  users,
  type: SET_USERS,
});

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  currentPage,
  type: SET_CURRENT_PAGE,
});

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};

export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({
  count,
  type: SET_TOTAL_USERS_COUNT,
});

type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};

export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({
  isFetching,
  type: SET_IS_FETCHING,
});

type SetFollowingInProgressType = {
  type: typeof SET_FOLLOWING_IN_PROGRESS;
  inProgress: boolean;
  id: number;
};

export const setFollowingInProgress = (
  inProgress: boolean,
  id: number
): SetFollowingInProgressType => ({
  inProgress,
  id,
  type: SET_FOLLOWING_IN_PROGRESS,
});

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));

  const response = await usersApi.getUsers(page, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(setCurrentPage(page));
};

const toggleFollow = async (
  dispatch: any,
  id: number,
  apiMethod: Function,
  actionCreator: Function
) => {
  dispatch(setFollowingInProgress(true, id));
  const response = await apiMethod(id);

  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setFollowingInProgress(false, id));
};

export const follow = (id: number) => (dispatch: any) => {
  toggleFollow(dispatch, id, usersApi.followUser.bind(usersApi), followSuccess);
};

export const unfollow = (id: number) => (dispatch: any) => {
  toggleFollow(dispatch, id, usersApi.unfollowUser.bind(usersApi), unfollowSuccess);
};
