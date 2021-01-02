import React from 'react';
import './Userpic.scss';
import userImage from '../../../assets/images/user-ghost.png';

type UserpickProps = {
  path: string | null;
  size?: string;
};

function Userpic({ size, path = '' }: UserpickProps) {
  const filePath: string = path ? path : userImage;
  const mod: string = size ? `userpic__image_${size}` : 'userpic__image_small';

  return (
    <div className="userpic">
      <img src={filePath} alt="userpic" className={`userpic__image ${mod}`} />
    </div>
  );
}

export default Userpic;
