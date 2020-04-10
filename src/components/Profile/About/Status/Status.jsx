import React from 'react';
import './Status.scss';
import Button from '../../../Button/Button';

class Status extends React.Component {

  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode:true });
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div className="status">

        { !this.state.editMode && 
          <p className="status__text"
            onClick={ () => this.activateEditMode()
          }>
            { this.props.text ? this.props.text : 'set a status message' }
          </p>
        }

        { this.state.editMode &&
          <div className="status__edit">
            <input 
              className="status__edit-field"
              type="text"
              value={ this.props.text }
              maxLength="300"
              placeholder="set status message"
              autoFocus={ true }
              onBlur={ () => this.deactivateEditMode() }
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
