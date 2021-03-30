import AppReducer from "./app/reducer";
import AuthReducer from "./auth/reducer";
import TransactionReducer from "./transactions/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  transactions: TransactionReducer,
});
