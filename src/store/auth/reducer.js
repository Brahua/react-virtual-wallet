import {
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  LOGIN,
  LOGOUT,
  SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT,
} from "./action.types";

import { handleActions } from "redux-actions";
import initialState from "./state";

const AuthReducer = handleActions(
  {
    [SIGN_IN_WITH_EMAIL_AND_PASSWORD]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SIGN_IN_WITH_GOOGLE]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SIGN_OUT]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [CREATE_USER_WITH_EMAIL_AND_PASSWORD]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [LOGIN]: {
      next: (state, { payload }) => ({
        ...state,
        loading: false,
        error: false,
        uid: payload.uid,
        name: payload.displayName,
      }),
      throw: (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload.message,
      }),
    },
    [LOGOUT]: (state, action) => initialState,
  },
  initialState
);

export default AuthReducer;
