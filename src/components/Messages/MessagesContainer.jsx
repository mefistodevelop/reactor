import Messages from './Messages';
import { addMessage } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
}

export default compose(connect(mapStateToProps, { addMessage }), withAuthRedirect)(Messages);
