import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = ({ routes }) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      {routes.map((route, index) => {
        const Component = route?.isPublic ? PublicRoute : PrivateRoute;
        return (
          <Component
            key={route.path + index}
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
          />
        );
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  </Suspense>
);
export default Routes;
