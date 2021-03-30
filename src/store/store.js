import { applyMiddleware, compose, createStore } from "redux";

import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import epics from "./epics";
import reducer from "./reducers";

const epicMiddleware = createEpicMiddleware();
const getMiddleware = () => {
  const middlewares = [epicMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }
  return applyMiddleware(...middlewares);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(getMiddleware()));
epicMiddleware.run(epics);

export default store;

// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { authReducer } from "./auth/reducer";
// import { uiReducer } from "./ui/reducer";
// import thunk from "redux-thunk";
// import { transactionReducer } from "./transaction/reducer";

// const composeEnhancers =
//   (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// const reducers = combineReducers({
//   auth: authReducer,
//   ui: uiReducer,
//   transactions: transactionReducer,
// });

// export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
