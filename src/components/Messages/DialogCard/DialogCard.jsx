import React from 'react';
import PropTypes from 'prop-types';
import './DialogCard.scss';
import { NavLink } from 'react-router-dom';
import Userpic from '../../common/Userpic/Userpic';

function DialogCard({ link, name, userpic }) {
  const userLink = link || name;

  return (
    <NavLink className="dialog-card__link" to={`/messages/${userLink}`}>
      <div className="dialog-card">
        <div className="dialog-card__userpic">
          <Userpic path={userpic} />
        </div>

        <span className="dialog-card__name">
          {name}
        </span>
      </div>
    </NavLink>
  );
}

DialogCard.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  userpic: PropTypes.string,
};

DialogCard.defaultProps = {
  link: '',
  userpic: '',
};

export default DialogCard;
