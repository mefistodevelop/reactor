import React from 'react';
import spinnerImage from './images/spinner.svg';

function Spinner() {
  return (
    <div className="spinner">
      <img src={ spinnerImage } alt="loading progress spinner" className="spinner__image"/>
    </div>
  );
}

export default Spinner;
