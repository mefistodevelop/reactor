import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '07273082-6b6c-45d4-9373-3d4dc2812a9e',
  },
});

export const usersApi = {
  getUsers(page, pageSize) {
    return (
      instance
        .get(`users?page=${ page }&count=${ pageSize }`)
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

  getUserStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },

  updateUserStatus(status) {
    return instance.put('/profile/status', { status });
  },
};

export const authApi = {
  getAuthData() {
    return (
      instance
      .get('/auth/me')
      .then((response) => response.data)
    );
  },

  login(email, password, rememberMe = false) {
    return (
      instance
        .post('/auth/login', { email, password, rememberMe })
        .then((response) => response.data)
    );
  },

  logout() {
    return instance
    .delete('/auth/login')
    .then((response) => response.data);
  }
};
