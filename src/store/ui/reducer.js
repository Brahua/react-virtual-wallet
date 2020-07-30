import {
  UI_SET_ERROR,
  UI_REMOVE_ERROR,
  UI_START_LOADING,
  UI_FINISH_LOADING,
} from "./action.types";

import initialState from "./state";

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_SET_ERROR:
      return { ...state, messageError: action.payload };
    case UI_REMOVE_ERROR:
      return { ...state, messageError: null };
    case UI_START_LOADING:
      return { ...state, loading: true };
    case UI_FINISH_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
