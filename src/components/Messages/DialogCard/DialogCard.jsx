import React from 'react';
import './DialogCard.scss';
import Userpic from '../../Userpic/Userpic';
import { NavLink } from 'react-router-dom';

function DialogCard(props) {

  const link = props.link ? props.link : props.name;

  return (
    <NavLink className={ "dialog-card__link" } to={ '/messages/' + link }>
      <div className="dialog-card">
        <div className="dialog-card__userpic">
          <Userpic path={ props.userpic } />
        </div>

        <span className="dialog-card__name">
          { props.name }
        </span>
      </div>
    </NavLink>
  );
}

export default DialogCard;
