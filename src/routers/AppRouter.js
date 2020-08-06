import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "./../store/auth/actions";
import { firebase } from "../config/firebase-config";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Loading from "../components/Loading";
import Transactions from "../containers/transactions/Transactions";

export default function AppRouter() {
  const dispatch = useDispatch();
  const [checkInFirebase, setCheckInFirebase] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login({ uid: user.uid, displayName: user.displayName }));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setCheckInFirebase(true);
    });
  }, [dispatch, setCheckInFirebase, setIsLoggedIn]);

  if (!checkInFirebase) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />
          <PrivateRoute
            exact
            path="/"
            component={Transactions}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
