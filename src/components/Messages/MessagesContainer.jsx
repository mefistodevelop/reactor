import Messages from './Messages';
import { updateNewMessageText, addMessage } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
}

export default compose(
  connect(mapStateToProps, { updateNewMessageText, addMessage, }),
  withAuthRedirect)(Messages);
