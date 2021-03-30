import FirebaseApi from "./firebase.api";

export default class AuthApi extends FirebaseApi {
  static onAuthStateChanged(callback) {
    return super.onAuthStateChanged(callback);
  }

  static signInWithEmailAndPassword(email, password) {
    return super.signInWithEmailAndPassword(email, password);
  }

  static signInWithGoogle() {
    return super.signInWithGoogle();
  }

  static createUserWithEmailAndPassword(email, password) {
    return super.createUserWithEmailAndPassword(email, password);
  }

  static signOut() {
    return super.signOut();
  }
}
