import {
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  LOGIN,
  LOGOUT,
  SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT,
} from "./action.types";

import { createActions } from "redux-actions";

const actionsCreator = createActions(
  {},
  LOGIN,
  LOGOUT,
  SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT,
  CREATE_USER_WITH_EMAIL_AND_PASSWORD
);
export const {
  login,
  logout,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signOut,
  createUserWithEmailAndPassword,
} = actionsCreator;
