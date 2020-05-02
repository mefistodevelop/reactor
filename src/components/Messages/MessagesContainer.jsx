import { connect } from 'react-redux';
import { compose } from 'redux';
import Messages from './Messages';
import { addMessage } from '../../redux/messagesReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({ messagesPage: state.messagesPage });

export default compose(connect(mapStateToProps, { addMessage }), withAuthRedirect)(Messages);
