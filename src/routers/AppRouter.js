import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import Dashboard from '../containers/dashboard/Dashboard'
import { useDispatch } from 'react-redux'
import { login } from '../redux/auth/action'
import { firebase } from './../libs/firebase-config';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export default function AppRouter() {
  
  const dispatch = useDispatch();
  const [checkInFirebase, setCheckInFirebase] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch( login({ uid: user.uid, displayName: user.displayName }));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setCheckInFirebase(true);
    })
  }, [dispatch, setCheckInFirebase, setIsLoggedIn])

  if (!checkInFirebase) {
    return (
      <div className="m-5">
        <h2>Cargando...</h2>
      </div>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn}/>
          <PrivateRoute exact path="/" component={Dashboard} isAuthenticated={isLoggedIn}/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}
