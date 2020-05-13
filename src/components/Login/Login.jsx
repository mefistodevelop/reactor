import React from 'react';
import { reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { signIn } from '../../redux/authReducer';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

  const onFormSubmit = ({ email, password, rememberMe }) => {
    dispatch(signIn(email, password, rememberMe));
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <section className="login">
      <LoginReduxForm onSubmit={onFormSubmit} />
    </section>
  );
}

export default Login;
