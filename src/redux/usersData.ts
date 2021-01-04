import { DialogUserType } from '../types/types';

const user: DialogUserType = {
  id: 1,
  name: 'User name',
  userpic: 'https://sun9-39.userapi.com/c624318/v624318471/2b0b4/cRkccpbqGdg.jpg',
};

const friends = [
  {
    id: 2,
    name: 'Stallone',
    userpic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDp1qHgizNWuuDGBMfvJ9Fa1yx1MxgCi77vRCx1yZKd-4d-yld',
  },
  {
    id: 3,
    name: 'Spidey',
    userpic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmlPDeFvNgK5-4D-WLjqItQy9QLFRMiPT7Mb3Ve2AE_HA6fWkz',
  },
  {
    id: 4,
    name: 'Batman',
    userpic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkxEYJcaSN3Veki_4Q7m_LYgOSFF0ITdxzG4IFfGxp8_BrYdG3',
    link: 'BruceWayne',
  },
  {
    id: 5,
    name: 'Goofy Doofy',
    userpic:
      'https://www.muralsticker.com/25439-thickbox/autocollants-et-vynils-disney-goofy.jpg',
    link: 'googoo',
  },
  {
    id: 6,
    name: 'Buzz Lightyear',
    userpic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR4VFHTHU0j5LMF45COg_es5t0S3BqkcBqReA3QUCZxx00hFxF',
    link: 'spaceRanger007',
  },
] as Array<DialogUserType>;

export const getUser = (): DialogUserType => user;

export const getFriends = (): Array<DialogUserType> => friends;

export const getCurrentTime = (): string => {
  const today = new Date();
  const minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  return `${today.getHours()}:${minutes}`;
};
