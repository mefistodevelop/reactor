import Messages from './Messages';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newText) => {
      dispatch(updateNewMessageTextActionCreator(newText));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
