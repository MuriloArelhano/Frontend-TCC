import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// auth api
import { AuthAPI } from '../api';

const RouteWrapper = ({ component: Component, isPrivate, isAuth, ...rest }) => {
  const [userData] = AuthAPI.userIsLogged();

  if (!userData && isPrivate) {
    return <Redirect to="/entrar" />;
  }

  if (userData && isAuth) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

export default RouteWrapper;
