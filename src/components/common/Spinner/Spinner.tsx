import React from 'react';
import spinnerImage from './images/spinner.svg';

type SpinnerType = {
  size?: string;
};

function Spinner({ size }: SpinnerType) {
  return (
    <div className="spinner">
      <img
        className="spinner__image"
        src={spinnerImage}
        width={size}
        alt="loading progress spinner"
      />
    </div>
  );
}

export default Spinner;
