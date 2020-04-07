import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '07273082-6b6c-45d4-9373-3d4dc2812a9e',
  },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return (
      instance
        .get(`users?page=${ currentPage }&count=${ pageSize }`)
        .then((response) => response.data)
    );
  },

  followUser(id) {
    return (
      instance
        .post(`follow/${ id }`)
        .then((response) => response.data)
    );
  },

  unfollowUser(id) {
    return (
      instance
        .delete(`follow/${ id }`)
        .then((response) => response.data)
    );
  },
};

export const profileApi = {
  getUserProfile(userId) {
    return (
      instance
        .get(`profile/${ userId }`)
        .then((response) => response.data)
    );
  },
};

export const authApi = {
  getAuthData() {
    return (
      instance
      .get('/auth/me')
      .then((response) => response.data)
    );
  }
};
