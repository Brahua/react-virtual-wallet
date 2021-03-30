import {
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_DONE,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_DONE,
  POST_TRANSACTION,
  POST_TRANSACTION_DONE,
  SET_TOTAL,
  SET_TOTAL_EXPENSE,
  SET_TOTAL_INCOME,
  SET_TRANSACTIONS,
} from "./action.types";

import { handleActions } from "redux-actions";
import initialState from "./state";

const TransactionReducer = handleActions(
  {
    [GET_TRANSACTIONS]: (state, action) => ({ ...state, loading: true }),
    [GET_TRANSACTIONS_DONE]: {
      next: (state, { payload }) => ({
        ...state,
        ...payload,
        error: false,
        loading: false,
      }),
      throw: (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload.message,
      }),
    },
    [POST_TRANSACTION]: (state, action) => ({ ...state, loading: true }),
    [POST_TRANSACTION_DONE]: {
      next: (state, action) => ({
        ...state,
        error: false,
        loading: false,
      }),
      throw: (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload.message,
      }),
    },
    [DELETE_TRANSACTION]: (state, action) => ({ ...state, loading: true }),
    [DELETE_TRANSACTION_DONE]: {
      next: (state, action) => ({
        ...state,
        error: false,
        loading: false,
      }),
      throw: (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload.message,
      }),
    },
    [SET_TRANSACTIONS]: (state, { payload }) => ({
      ...state,
      loading: false,
      transactions: payload,
    }),
    [SET_TOTAL_INCOME]: (state, { payload }) => ({ ...state, totalIncome: payload }),
    [SET_TOTAL_EXPENSE]: (state, { payload }) => ({ ...state, totalExpense: payload }),
    [SET_TOTAL]: (state, { payload }) => ({ ...state, total: payload }),
  },
  initialState
);

export default TransactionReducer;
