const user = {
  id: 1,
  name: 'User name',
  userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
};

const getUser = () => {
  return user;
}

const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        name: 'you know my name',
        userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYGgvh223rQXiRrH1k91ftAkPXZ8rUsDYBAi_UyUgyqwGtVRBl',
        time: 'yesterday',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, cum.',
        likes: 100,
      },
      {
        id: 2,
        name: user.name,
        userpic: user.userpic,
        time: 'yesterday',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, error porro nemo libero doloremque beatae accusamus fugiat culpa placeat perspiciatis?',
        likes: 201,
      },
    ],
  },
};

export default state;
export { getUser };
