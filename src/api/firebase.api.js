import { auth, db, googleAuthProvider } from "../config/firebase.config";

import { from } from "rxjs";

const operators = {
  gte: ">=",
  gt: ">",
  lt: "<",
  lte: "<=",
  contains: "array-contains",
};

export default class FirebaseApi {
  static onAuthStateChanged(observer) {
    auth.onAuthStateChanged(observer);
  }

  static onSnapshot(path, setData) {
    db.collection(path).onSnapshot((snapshot) => {
      let data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setData(data);
    });
  }

  static getData(path, { filters = null, orderBy = null, limit = 0 }) {
    let docs = path.split("/");
    let query = db.collection(docs.shift());
    if (docs.length) docs.forEach((doc) => (query = query.doc(doc)));
    if (filters) {
      Object.keys(filters).forEach((name) => {
        let operator;
        if (typeof filters[name] === "object") {
          operator = Object.keys(filters[name])[0];
          query = query.where(name, operators[operator], filters[name]);
        } else {
          operator = "==";
          query = query.where(name, operator, filters[name]);
        }
      });
    }
    if (orderBy) {
      Object.keys(orderBy).forEach(
        (property) => (query = query.orderBy(property, orderBy[property]))
      );
    }
    if (limit > 0) {
      query = query.limit(limit);
    }

    return from(
      query.get().then((querySnapshot) => {
        if (querySnapshot.exists) {
          return {
            id: querySnapshot.id,
            ...querySnapshot.data(),
          };
        } else {
          let data = [];
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
          return data;
        }
      })
    );
  }

  static get(path, { filters = null, orderBy = null, limit = 0 }) {
    let query = db.collection(path);
    if (filters) {
      Object.keys(filters).forEach((name) => {
        let operator;
        if (typeof filters[name] === "object") {
          operator = Object.keys(filters[name])[0];
          query = query.where(name, operators[operator], filters[name]);
        } else {
          operator = "==";
          query = query.where(name, operator, filters[name]);
        }
      });
    }
    if (orderBy) {
      Object.keys(orderBy).forEach(
        (property) => (query = query.orderBy(property, orderBy[property]))
      );
    }
    if (limit > 0) {
      query = query.limit(limit);
    }

    return from(
      query.get().then((querySnapshot) => {
        if (querySnapshot.exists) {
          return {
            id: querySnapshot.id,
            ...querySnapshot.data(),
          };
        } else {
          let data = [];
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
          return data;
        }
      })
    );
  }

  static post(path, doc) {
    return from(db.collection(path).add(doc));
  }

  static delete(path, id) {
    return from(db.collection(path).doc(id).delete());
  }

  static signInWithEmailAndPassword(email, password) {
    return from(auth.signInWithEmailAndPassword(email, password));
  }

  static signInWithGoogle() {
    return from(auth.signInWithPopup(googleAuthProvider));
  }

  static createUserWithEmailAndPassword(email, password) {
    return from(auth.createUserWithEmailAndPassword(email, password));
  }

  static signOut() {
    return from(auth.signOut());
  }
}
