import { Redirect, Route } from "react-router-dom";

import React from "react";

export default function PublicRoutes({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/transactions" />
      }
    />
  );
}
