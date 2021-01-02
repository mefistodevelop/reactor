import React, { useEffect } from 'react';
import './Users.scss';
import User from './User/User';
import { Pagination } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { UserType } from '../../types/types';
import { follow, unfollow, requestUsers } from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

export function Users() {
  const dispatch = useDispatch();
  const usersState = useSelector((state: any) => state.usersPage);
  const pageSize = usersState.pageSize;
  const users = usersState.users;
  const currentPage = usersState.currentPage;
  const followingInProgress = usersState.followingInProgress;
  const totalUsersCount = usersState.totalUsersCount;
  const isFetching = usersState.isFetching;

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize));
  }, []);

  const onCurrentPageChange = (event: Object, page: number): void => {
    dispatch(requestUsers(page, pageSize));
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const usersItems = users.map((user: UserType) => (
    <li className="users__item" key={user.id}>
      <User
        name={user.name}
        status={user.status}
        userpic={user.photos.large}
        followed={user.followed}
        id={user.id}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    </li>
  ));

  return (
    <section className="users">
      <div className="users__pagination">
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={onCurrentPageChange}
        />
      </div>
      {isFetching ? <Spinner /> : <ul className="users__list">{usersItems}</ul>}
    </section>
  );
}
