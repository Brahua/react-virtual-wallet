import {
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT,
} from "./action.types";
import { catchError, map, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { login, logout } from "./actions";

import AuthApi from "../../api/auth.api";

const signInWithEmailAndPasswordEpic = (action$) =>
  action$.pipe(
    ofType(SIGN_IN_WITH_EMAIL_AND_PASSWORD),
    switchMap(({ payload }) =>
      AuthApi.signInWithEmailAndPassword(payload.email, payload.password).pipe(
        map(({ user }) => login({ uid: user.uid, displayName: user.displayName })),
        catchError((error) => of(login(error)))
      )
    )
  );

const signInWithGoogleEpic = (action$) =>
  action$.pipe(
    ofType(SIGN_IN_WITH_GOOGLE),
    switchMap(({ payload }) =>
      AuthApi.signInWithGoogle().pipe(
        map(({ user }) => login({ uid: user.uid, displayName: user.displayName })),
        catchError((error) => of(login(error)))
      )
    )
  );

const createUserWithEmailAndPasswordEpic = (action$) =>
  action$.pipe(
    ofType(CREATE_USER_WITH_EMAIL_AND_PASSWORD),
    switchMap(({ payload }) => {
      let usuario;
      return AuthApi.createUserWithEmailAndPassword(payload.email, payload.password).pipe(
        map(({ user }) => {
          usuario = { uid: user.uid, displayName: payload.name };
          return from(user.updateProfile({ displayName: payload.name }));
        }),
        map(() => login(usuario))
      );
    })
  );

const signOutEpic = (action$) =>
  action$.pipe(
    ofType(SIGN_OUT),
    switchMap(({ payload }) => AuthApi.signOut().pipe(map(() => logout())))
  );

export const AuthEpics = combineEpics(
  signInWithEmailAndPasswordEpic,
  signInWithGoogleEpic,
  signOutEpic,
  createUserWithEmailAndPasswordEpic
);
