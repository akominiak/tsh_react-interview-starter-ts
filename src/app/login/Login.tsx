import { Header } from 'app/header/Header';
import React from 'react';
import { LoginForm } from './login-form/LoginForm';
import "./Login.scss";

export const Login = () => {
  return (
    <>
      <Header isLoginPage={true} />
      <LoginForm />
    </>
  );
};
