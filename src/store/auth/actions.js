import { LOGIN, REGISTER, LOGOUT } from "./action.type";
import { MessageUtil } from "../../utils/message-util";
import { REMOVE_ALL } from "../transaction/action.types";
import { AUTH_API } from "../../api/auth.api";
import { TransactionActions } from "../transaction/actions";

export const AuthActions = {
  signInWithEmailAndPassword: (email, password) => {
    return async (dispatch) => {
      try {
        MessageUtil.loading();
        await AUTH_API.signInWithEmailAndPassword(email, password, (user) => {
          dispatch(login({ uid: user.uid, displayName: user.displayName }));
        });
        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },
  signInWithGoogle: () => {
    return async (dispatch) => {
      try {
        await AUTH_API.signInWithGoogle((user) => {
          dispatch(login({ uid: user.uid, displayName: user.displayName }));
        });
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },
  createUserWithEmailAndPassword: (email, password, name) => {
    return async (dispatch) => {
      try {
        MessageUtil.loading();
        await AUTH_API.createUserWithEmailAndPassword(email, password, name, (user) => {
          dispatch(login({ uid: user.uid, displayName: user.displayName }));
        });
        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },
  signOut: () => {
    return async (dispatch) => {
      try {
        MessageUtil.loading();
        await AUTH_API.signOut(() => logout(dispatch));
        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },
};

export const register = ({ uid, displayName }) => ({
  type: REGISTER,
  payload: { uid, displayName },
});

export const login = ({ uid, displayName }) => ({
  type: LOGIN,
  payload: { uid, displayName },
});

export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch(TransactionActions.removeAll());
};
