import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../containers/auth/login/Login";
import Register from "../containers/auth/register/Register";

export default function AuthRouter() {
  return (
    <div className="container-auth">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}
