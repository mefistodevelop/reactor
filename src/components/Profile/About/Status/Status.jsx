import React from 'react';
import './Status.scss';
import Button from '../../../Button/Button';

class Status extends React.Component {

  state = {
    editMode: false,
    status: this.props.userStatus,
  };

  isMyPage() {
    if (this.props.userId === this.props.authorizedUserId) {
      return true;
    }

    return false;
  }

  activateEditMode = () => {
    if (this.isMyPage()) {
      this.setState({ editMode: true });
    }
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  setStatusMessage() {
    let statusMessage = '';

    if (this.props.userStatus) {
      statusMessage = this.props.userStatus;
    } else {
      statusMessage = this.isMyPage() ? 'set a status message' : '';
    }

    return statusMessage;
  }

  render() {
    return (
      <div className="status">

        { !this.state.editMode && 
          <p className="status__text" onClick={ this.activateEditMode }>
            { this.setStatusMessage() }
          </p>
        }

        { this.state.editMode &&
          <div className="status__edit">
            <input 
              className="status__edit-field"
              type="text"
              value={ this.state.status }
              maxLength="300"
              placeholder="set a status message"
              autoFocus={ true }
              onBlur={ this.deactivateEditMode }
              onChange={ this.onStatusChange }
            />
            <div className="status__button">
              <Button text="save"/>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Status;
