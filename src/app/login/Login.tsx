import { Header } from 'app/header/Header';
import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { LoginForm } from './login-form/LoginForm';
import "./Login.scss";

export const Login = () => {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};
