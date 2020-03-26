const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Stallone',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDp1qHgizNWuuDGBMfvJ9Fa1yx1MxgCi77vRCx1yZKd-4d-yld',
      status: 'On air',
      location: {
        country: 'USA',
        city: 'LA',
      },
      followed: true,
    },
    {
      id: 2,
      name: 'Spidey',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmlPDeFvNgK5-4D-WLjqItQy9QLFRMiPT7Mb3Ve2AE_HA6fWkz',
      status: 'On air',
      location: {
        country: 'Marvel',
        city: 'NY',
      },
      followed: false,
    },
    {
      id: 3,
      name: 'Batman',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkxEYJcaSN3Veki_4Q7m_LYgOSFF0ITdxzG4IFfGxp8_BrYdG3',
      status: 'On air',
      link: 'BruceWayne',
      location: {
        country: 'DC',
        city: 'Gotham',
      },
      followed: true,
    },
    {
      id: 4,
      name: 'Goofy Doofy',
      userpic: 'https://www.muralsticker.com/25439-thickbox/autocollants-et-vynils-disney-goofy.jpg',
      status: 'On air',
      link: 'googoo',
      location: {
        country: 'Disney',
        city: 'City',
      },
      followed: false,
    },
    {
      id: 5,
      name: 'Buzz Lightyear',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR4VFHTHU0j5LMF45COg_es5t0S3BqkcBqReA3QUCZxx00hFxF',
      status: 'On air',
      link: 'spaceRanger007',
      location: {
        country: 'Far Galaxy',
        city: 'Incredible town',
      },
      followed: false,
    }
  ],
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
        users: [ ...state.users, ...action.users ],
      };

    default:
      return state;
  }  
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
