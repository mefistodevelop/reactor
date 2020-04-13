import React from 'react';
import './Button.scss';

function Button(props) {

  return (
    <button 
      className="button" 
      type={ props.type || 'button' } 
      onClick={ props.onClick || undefined }
    >
      { props.text }
    </button>
  );
}

export default Button;
