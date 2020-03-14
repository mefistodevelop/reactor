const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

function profileReducer(state, action) {

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.profilePage.newPostText = action.text;
      return state.profilePage;

    case ADD_NEW_POST:
      const posts = state.profilePage.posts;
      const lastId = posts[posts.length - 1].id;
    
      posts.push({
        id: lastId + 1,
        name: state.profilePage.user.name,
        userpic: state.profilePage.user.userpic,
        time: state.getCurrentTime(),
        text: state.profilePage.newPostText,
        likes: 0,
      });
  
      state.profilePage.newPostText = '';
      return state.profilePage;

    default:
      return state.profilePage;
  }  
}

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });

export default profileReducer;
