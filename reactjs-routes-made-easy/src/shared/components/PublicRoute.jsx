import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Storagehelper } from '../helpers/StorageHelper';

const publicRoute = ({ render: Component, ...rest }) => (
  <>
    {Storagehelper.hasToken() ?
      <Redirect to="/" />
      :
      <Route
        {...rest}
        render={props => <Component {...props} />}
      />
    }
  </>
);

export default publicRoute;
