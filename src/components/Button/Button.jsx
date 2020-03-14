import React from 'react';
import './Button.scss';

function Button(props) {
  
  const noButtonFunctionWarning = () => alert('action not defined');

  return (
    <button 
      className="button" 
      type={ props.type || 'button' } 
      onClick={ props.onClick || noButtonFunctionWarning }
    >
      { props.text }
    </button>
  );
}

export default Button;
