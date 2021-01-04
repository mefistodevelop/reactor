export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

export type PostType = {
  id: number;
  name: string;
  userpic: string | null;
  time: string;
  text: string;
  likes: number;
};
