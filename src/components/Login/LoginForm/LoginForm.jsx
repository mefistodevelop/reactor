import React from 'react';
import './LoginForm.scss';
import Button from '../../Button/Button';
import { Field } from 'redux-form';
import { Input } from '../../common/FormElements/FormElements';
import { required, maxLength, minLength } from '../../../utils/validators';

function LoginForm(props) {
  return (
    <form onSubmit={ props.handleSubmit } className="login-form">
      <h3 className="login-form__title">Login</h3>
      <Field className="login-form__field"
        component={ Input }
        type="email"
        name="email"
        placeholder="email"
        validate={[ required ]}
      />
      <Field className="login-form__field"
        component={ Input }
        type="password"
        name="password"
        placeholder="password"
        validate={[ required, maxLength10, minLength4 ]}
      />

      <label className="login-form__label">
        <Field className="login-form__checkbox"
          component="input"
          type="checkbox"
          name="rememberMe"
          checked
        />
        <span className="login-form__checkbox-button" />
        Remember me
      </label>
      <div className="form-error">
        { props.error }
      </div>
      <Button type="submit" text="Enter" />
    </form>
  );
}

const maxLength10 = maxLength(10);
const minLength4 = minLength(4);

export default LoginForm;
