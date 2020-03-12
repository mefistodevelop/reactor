import React from 'react';
import './Post.scss';
import Userpic from '../../../Userpic/Userpic';

function Post(props) {
  return (
    <div className="post">
      <header className="post__header">
        <div className="post__userpic">
          <Userpic path={props.userpic} />
        </div>
        
        <div className="post__header-info">
          <h3 className="post__username">
            {props.name}
          </h3>

          <span className="post__time">
            {props.time}
          </span>
        </div>
      </header>

      <p className="post__text">
        {props.text}
      </p>

      <footer className="post__footer">
        <span className="post__like">{props.likes} people like this</span>
      </footer>
    </div>
  );
}

export default Post;
