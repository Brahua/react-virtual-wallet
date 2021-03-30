import React, { lazy, useEffect, useState } from "react";
import { Redirect, Switch } from "react-router-dom";

import AuthApi from "../api/auth.api";
import AuthRoutes from "./auth.routes";
import Loading from "./../components/loading/Loading";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { login } from "../store/auth/actions";
import { useDispatch } from "react-redux";

const Transactions = lazy(() => import("./../containers/transactions/Transactions"));

export default function AppRoutes() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AuthApi.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login({ uid: user.uid, displayName: user.displayName }));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch, setIsLoggedIn]);

  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Switch>
            <PrivateRoutes
              exact
              path="/transactions"
              isAuth={isLoggedIn}
              component={Transactions}
            />
            <PublicRoutes path="/" isAuth={isLoggedIn} component={AuthRoutes} />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
