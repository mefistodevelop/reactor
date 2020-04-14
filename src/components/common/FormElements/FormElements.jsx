import React from 'react';
import './FormElements.scss';

export const Input = ({ input, meta , ...props }) => {

  const hasError = meta.touched && meta.error;
  const errorClass = hasError ? ' error' : '';

  return (
    <div className="input-field">
      { hasError && <span className="error-message">{ meta.error }</span> }
      <input { ...input } {...props } className={ props.className + errorClass } />
    </div>
  );
}
