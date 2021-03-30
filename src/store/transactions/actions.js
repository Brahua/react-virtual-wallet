import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_DONE,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_DONE,
  POST_TRANSACTION,
  POST_TRANSACTION_DONE,
  REMOVE_ALL,
  SET_TOTAL,
  SET_TOTAL_EXPENSE,
  SET_TOTAL_INCOME,
  SET_TRANSACTIONS,
  SET_TRANSACTION_ACTIVE,
} from "./action.types";

import { createActions } from "redux-actions";

const actionsCreator = createActions(
  {},
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_DONE,
  POST_TRANSACTION,
  POST_TRANSACTION_DONE,
  DELETE_TRANSACTION,
  DELETE_TRANSACTION_DONE,
  SET_TRANSACTIONS,
  SET_TOTAL,
  SET_TOTAL_EXPENSE,
  SET_TOTAL_INCOME,
  SET_TRANSACTION_ACTIVE,
  ADD_TRANSACTION,
  REMOVE_ALL
);
export const {
  getTransactions,
  getTransactionsDone,
  postTransaction,
  postTransactionDone,
  deleteTransaction,
  deleteTransactionDone,
  setTransactions,
  setTotal,
  setTotalExpense,
  setTotalIncome,
  setTransactionActive,
  addTransaction,
  removeAll,
} = actionsCreator;
