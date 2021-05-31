import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Storagehelper } from '../helpers/StorageHelper';

const privateRoute = ({ render: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      Storagehelper.hasToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    )}
  />
);

export default privateRoute;
