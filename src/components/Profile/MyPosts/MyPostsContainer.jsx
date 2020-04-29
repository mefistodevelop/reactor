import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    user: state.profilePage.user,
  };
}

const MyPostsContainer = connect(mapStateToProps, { addPost, })(MyPosts);

export default MyPostsContainer;
