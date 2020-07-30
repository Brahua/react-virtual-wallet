import { LOGIN, LOGOUT } from "./action.type";
import initialState from "./state";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
