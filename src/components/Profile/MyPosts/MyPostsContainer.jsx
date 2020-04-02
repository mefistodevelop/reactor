import MyPosts from './MyPosts';
import { updateNewPostText, addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
}

const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost, })(MyPosts);

export default MyPostsContainer;
