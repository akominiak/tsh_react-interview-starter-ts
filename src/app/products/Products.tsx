import { Header } from 'app/header/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Products.scss";

export const Products = () => {
  return (
    <>
      <Header />
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};
