import React, {lazy} from "react";

import Login from "./private/Login/Login";

const Secure = lazy(() => import('./secure'));

// import RouteRenderer from "./shared/components/RouteRenderer";

const ROUTES = [
  {
    path: "/login",
    component: Login,
    isPublic: true,                       // routes marked public can be accesed without authentication
  },
  {
    path: "/some_other_private_screen",
    component: () => <h1>Some Other Private Screen</h1>,
  },
  {
    path: '/',
    component: Secure

    // EITHER specify component directly as above (or)
    // specify all nested routes of that component here itslef as below
    
    // component: (props) => <RouteRenderer {...props} />,
    // routes: [
    //   {
    //     path: "/",
    //     exact: true,
    //     component: () => <h1>App Dashboard</h1>,
    //   },
    //   {
    //     path: "/page",
    //     component: AppInnerComponent
    //   },
    //   {
    //     path: "/second-page",
    //     component: () => <h1>App Second page</h1>,
    //   },
    // ],
  },
];

export default ROUTES;
