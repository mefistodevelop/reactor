import React from 'react';
import './DialogCard.scss';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';

type DialogCardType = {
  link: string;
  name: string;
  userpic: string;
};

export function DialogCard({ link, name, userpic }: DialogCardType) {
  const userLink: string = link || name;

  return (
    <NavLink className="dialog-card__link" to={`/messages/${userLink}`}>
      <div className="dialog-card">
        <div className="dialog-card__userpic">
          <Userpic path={userpic} />
        </div>

        <span className="dialog-card__name">{name}</span>
      </div>
    </NavLink>
  );
}
