import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
}

const MyPostsContainer = connect(mapStateToProps, { addPost, })(MyPosts);

export default MyPostsContainer;
