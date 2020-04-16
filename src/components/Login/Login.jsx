import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

function Login(props) {

  const LoginReduxForm  = reduxForm({ form: 'login' })(LoginForm);

  const onFormSubmit = (formData) => {
    props.signIn(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <section className="login">
      <div className="login__form">
        <LoginReduxForm onSubmit={ onFormSubmit } />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signIn })(Login);
