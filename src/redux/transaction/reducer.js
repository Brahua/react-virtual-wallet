import {
  SET_TRANSACTION_ACTIVE,
  SET_TRANSACTIONS,
  SET_TOTAL_INCOME,
  SET_TOTAL_EXPENSE,
  SET_TOTAL,
  REMOVE_ALL,
} from "./action-types";

const initialState = {
  transactions: [],
  active: null,
  total: 0,
  totalIncome: 0,
  totalExpense: 0,
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_TOTAL_INCOME:
      return {
        ...state,
        totalIncome: action.payload,
      };
    case SET_TOTAL_EXPENSE:
      return {
        ...state,
        totalExpense: action.payload,
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case SET_TRANSACTION_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case REMOVE_ALL:
      return initialState;
    default:
      return state;
  }
};
