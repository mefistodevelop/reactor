import React from 'react';
import './Userpic.scss';

function Userpic(props) {
  return (
    <div className="userpic">
      <img src={props.path} alt="userpic" className="userpic__image"/>
    </div>
  );
}

export default Userpic;
