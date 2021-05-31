import React from 'react';

import Dashboard from './Dashboard/Dashboard';

const DASHBOARD_ROUTES = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: "/page",
    exact: true,
    component: () => <h1>Secure's second nested screen</h1>
  },
  {
    path: "/page/2",
    component: () => <h1>Secure's third nested screen with path params.</h1>
  }
];

export default DASHBOARD_ROUTES;