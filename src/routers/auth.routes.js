import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// const Landing = lazy(() => import("./../containers/landing/Landing"));
const Login = lazy(() => import("./../containers/auth/components/Login"));
const Register = lazy(() => import("./../containers/auth/components/Register"));

export default function AuthRoutes() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}
