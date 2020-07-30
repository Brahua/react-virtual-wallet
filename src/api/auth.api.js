import { firebase, googleAuthProvider } from "../config/firebase-config";

export const AUTH_API = {
  signInWithEmailAndPassword: async (email, password, login) => {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(user);
    login(user);
  },

  signInWithGoogle: async (login) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    login(user);
  },

  createUserWithEmailAndPassword: async (email, password, name, login) => {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: name });
    login(user);
  },

  signOut: async () => await firebase.auth().signOut(),
};
