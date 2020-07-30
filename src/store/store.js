import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./auth/reducer";
import { uiReducer } from "./ui/reducer";
import thunk from "redux-thunk";
import { transactionReducer } from "./transaction/reducer";

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  transactions: transactionReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
