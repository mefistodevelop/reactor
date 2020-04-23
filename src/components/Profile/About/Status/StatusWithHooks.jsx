import React from 'react';
import './Status.scss';
import Button from '../../../Button/Button';
import { useState } from 'react';

const StatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.userStatus);

  const activateEditMode = () => {
    if (isMyPage()) {
      setEditMode(true);
    };
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const isMyPage = () => {
    if (props.userId === props.authorizedUserId) {
      return true;
    }
    return false;
  }

  const setStatusMessage = () => {
    let statusMessage = '';

    if (props.userStatus) {
      statusMessage = props.userStatus;
    } else {
      statusMessage = isMyPage() ? 'set a status message' : '';
    }

    return statusMessage;
  }

  const onstatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div className="status">

      {!editMode &&
        <p className="status__text" onClick={activateEditMode}>
          {setStatusMessage()}
        </p>
      }

      {editMode &&
        <div className="status__edit" onBlur={deactivateEditMode}>
          <input
            value={ status }
            className="status__edit-field"
            type="text"
            maxLength="300"
            placeholder="set a status message"
            autoFocus={true}
            onChange={onstatusChange}
          />
          <div className="status__button">
            <Button text="save" />
          </div>
        </div>
      }
    </div>
  );
}

export default StatusWithHooks;
