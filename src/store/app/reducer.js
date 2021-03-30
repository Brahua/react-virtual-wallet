import { handleActions } from "redux-actions";
import initialState from "./state";

const AppReducer = handleActions(
  {
    APP_ACTION: (state, action) => ({ ...state }),
  },
  initialState
);

export default AppReducer;
