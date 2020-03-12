import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

function MyPosts(props) {
  return (
    <div className="my-posts">
      <Post 
        userpic={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGgvh223rQXiRrH1k91ftAkPXZ8rUsDYBAi_UyUgyqwGtVRBl'}
        name={'you know my name'}
        time={'yesterday'}
        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, cum.'}
        likes={100}
      />
      <Post 
        userpic={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGgvh223rQXiRrH1k91ftAkPXZ8rUsDYBAi_UyUgyqwGtVRBl'}
        name={'you know my name'}
        time={'yesterday'}
        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, cum.'}
        likes={200}
      />
    </div>
  );
}

export default MyPosts;
