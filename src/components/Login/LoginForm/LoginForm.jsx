import React from 'react';
import './LoginForm.scss';
import Button from '../../Button/Button';
import { Field } from 'redux-form';

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="login-form">
      <h3 className="login-form__title">Login</h3>
      <Field className="login-form__field"
        component="input"
        type="text"
        name="login"
        placeholder="login"
      />
      <Field className="login-form__field"
        component="input"
        type="password"
        name="password"
        placeholder="password"
      />
      <label className="login-form__label">
        <Field className="login-form__checkbox"
          component="input"
          type="checkbox"
          name="rememberMe"
        />
        <span className="login-form__checkbox-button" />
        Remember me
      </label>
      <Button type="submit" text="Enter" />
    </form>
  );
}

export default LoginForm;
