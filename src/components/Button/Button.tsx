import React from 'react';
import './Button.scss';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
  text: string;
};

function Button({ type, onClick, text }: ButtonType) {
  return (
    <button className="button" type={type || 'button'} onClick={onClick || undefined}>
      {text}
    </button>
  );
}

export default Button;
