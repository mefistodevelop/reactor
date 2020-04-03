import React from 'react';
import './Userpic.scss';
import userImage from '../../../assets/images/user-ghost.png';

function Userpic(props) {
  const path = props.path ? props.path : userImage;
  const mod =(props.size) ?  `userpic__image_${ props.size }` : 'userpic__image_small';

  return (
    <div className="userpic">
      <img src={ path } alt="userpic" className={ `userpic__image ${ mod }` }/>
    </div>
  );
}

export default Userpic;
