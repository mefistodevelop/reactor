import React from 'react';
import './Post.scss';
import Userpic from '../../../common/Userpic/Userpic';

type PostType = {
  userpic: string;
  name: string;
  time: string;
  text: string;
  likes: number;
};

export function Post({ userpic, name, time, text, likes }: PostType) {
  return (
    <div className="post">
      <header className="post__header">
        <div className="post__userpic">
          <Userpic path={userpic} size="small" />
        </div>

        <div className="post__header-info">
          <h3 className="post__username">{name}</h3>

          <span className="post__time">{time}</span>
        </div>
      </header>

      <p className="post__text">{text}</p>

      <footer className="post__footer">
        <span className="post__like">{likes} people like this</span>
      </footer>
    </div>
  );
}
