import React from 'react';
import './AddPost.scss';
import Userpic from '../../../Userpic/Userpic';
import Button from '../../../Button/Button';

function AddPost(props) {
  return (
    <div className="add-post">
      <div className="add-post__userpic">
        <Userpic path={ props.userData.userpic } />
      </div>
      <div className="add-post__form">
        <textarea className="add-post__field" placeholder="write something" />
        <Button type="button" text="share" />
      </div>
    </div>
  );
}

export default AddPost;
