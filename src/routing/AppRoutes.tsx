import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/login/Login';
import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.home} exact component={Products} />
        <Route path={AppRoute.login} component={Login} />

        <Redirect to={AppRoute.home} />
      </Switch>
    </BrowserRouter>
  );
};
