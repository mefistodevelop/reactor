import React from 'react';
import spinnerImage from './images/spinner.svg';

function Spinner(props) {
  return (
    <div className="spinner">
      <img className="spinner__image"
        src={ spinnerImage }
        width={ props.size }
        alt="loading progress spinner"
      />
    </div>
  );
}

export default Spinner;
