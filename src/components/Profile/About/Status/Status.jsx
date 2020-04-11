import React from 'react';
import './Status.scss';
import Button from '../../../Button/Button';

class Status extends React.Component {

  state = {
    editMode: false,
    status: this.props.userStatus,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
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

  render() {
    return (
      <div className="status">

        { !this.state.editMode && 
          <p className="status__text"
            onClick={ this.activateEditMode }
          >
            { this.props.userStatus || 'set a status message' }
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
