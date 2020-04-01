import React from 'react';
import './Userpic.scss';

function Userpic(props) {
  const mod =(props.size) ?  `userpic__image_${ props.size }` : 'userpic__image_small';

  return (
    <div className="userpic">
      <img src={ props.path } alt="userpic" className={ `userpic__image ${ mod }` }/>
    </div>
  );
}

export default Userpic;
