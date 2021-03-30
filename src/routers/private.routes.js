import { Redirect, Route } from "react-router-dom";

import Layout from "../containers/layout/Layout";
import React from "react";

export default function PrivateRoutes({ isAuth, component: Component, ...rest }) {
  return (
    <Layout>
      <Route
        {...rest}
        component={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </Layout>
  );
}
