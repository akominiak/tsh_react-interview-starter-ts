import { Header } from 'app/header/Header';
import React from 'react';
import { LoginForm } from './login-form/LoginForm';
import "./Login.scss";

export const Login = () => {
  return (
    <div className="login-page-container">
      <div className="image">
      </div>
      <div className="form-container">
        <Header isLoginPage={true} />
        <LoginForm />
      </div>
    </div>
  );
};
