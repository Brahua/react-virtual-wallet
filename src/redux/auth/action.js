import Swal from "sweetalert2";
import { LOGIN, REGISTER, LOGOUT } from "./action-type";
import { firebase, googleAuthProvider } from "./../../libs/firebase-config";
import { startLoading, finishLoading } from "../ui/actions";
import { MessageUtil } from "../../utils/message-util";
import { REMOVE_ALL } from "../transaction/action-types";

export const signInWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login({ uid: user.uid, displayName: user.displayName }));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      MessageUtil.error(error.message);
    }
  };
};

export const signInWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) =>
        dispatch(login({ uid: user.uid, displayName: user.displayName }))
      )
      .catch((error) => {
        MessageUtil.error(error.message);
      });
  };
};

export const createUserWithEmailAndPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: name });
      dispatch(login({ uid: user.uid, displayName: name }));
      dispatch(finishLoading());
      Swal.fire("Registro exitoso", "Sus datos se guardaron correctamente", "success");
    } catch (error) {
      dispatch(finishLoading());
      MessageUtil.error(error.message);
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      await firebase.auth().signOut();
      dispatch({ type: LOGOUT });
      dispatch({ type: REMOVE_ALL });
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      MessageUtil.error(error.message);
    }
  };
};

export const register = ({ uid, displayName }) => ({
  type: REGISTER,
  payload: { uid, displayName },
});

export const login = ({ uid, displayName }) => ({
  type: LOGIN,
  payload: { uid, displayName },
});
