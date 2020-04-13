import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';

function Login(props) {

  const LoginReduxForm  = reduxForm({ form: 'login' })(LoginForm);

  const onFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <section className="login">
      <div className="login__form">
        <LoginReduxForm onSubmit={ onFormSubmit } />
      </div>
    </section>
  );
}

export default Login;
