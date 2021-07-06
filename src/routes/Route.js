import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// auth api
import { AuthAPI, StorageAPI } from '../api';

const RouteWrapper = ({ component: Component, isPrivate, isAuth, path, ...rest }) => {
  const [userData] = AuthAPI.userIsLogged();
  const isFormStoredRoute = StorageAPI.getItem('@devgo-form-route');

  if (!userData && isPrivate) {
    const isFormRoute = path.includes('formulario');
    isFormRoute && StorageAPI.setItem('@devgo-form-route', true);
    return <Redirect to="/entrar" />;
  }

  if (userData && isAuth && isFormStoredRoute) {
    return <Redirect to="/formulario" />;
  }

  if (userData && isAuth && !isFormStoredRoute) {
    return <Redirect to="/" />;
  }

  return <Route path={path} component={Component} {...rest} />;
}

export default RouteWrapper;
