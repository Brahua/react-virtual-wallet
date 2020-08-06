import { MessageUtil } from "../../utils/message-util";
import { TransactionApi } from "../../api/transaction.api";
import {
  SET_TRANSACTIONS,
  SET_TRANSACTION_ACTIVE,
  SET_TOTAL_INCOME,
  SET_TOTAL_EXPENSE,
  SET_TOTAL,
  REMOVE_ALL,
} from "./action.types";

export const TransactionActions = {
  get: () => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        TransactionApi.get(uid, (transactions, total, totalIncome, totalExpense) => {
          dispatch(TransactionActions.setTransactions(transactions));
          dispatch(TransactionActions.setTotalIncome(totalIncome));
          dispatch(TransactionActions.setTotalExpense(totalExpense));
          dispatch(TransactionActions.setTotalAvailable(total));
        });

        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },

  add: (transaction) => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        transaction = await TransactionApi.post(uid, transaction);

        MessageUtil.success("Se registró correctamente la transacción");
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },

  update: (transaction) => {
    return async (getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        await TransactionApi.put(uid, transaction);

        MessageUtil.success("Se actualizó correctamente la transacción");
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },

  delete: (transaction) => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();
        const result = await MessageUtil.confirmation();
        if (result.value) {
          const { uid } = getState().auth;
          await TransactionApi.delete(uid, transaction.id);
          MessageUtil.success("Se eliminó correctamente la transacción");
        }
        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    };
  },

  setTotalAvailable: (total) => ({ type: SET_TOTAL, payload: total }),

  setTotalIncome: (totalIncome) => ({ type: SET_TOTAL_INCOME, payload: totalIncome }),

  setTotalExpense: (totalExpense) => ({ type: SET_TOTAL_EXPENSE, payload: totalExpense }),

  setTransactions: (transactions) => ({ type: SET_TRANSACTIONS, payload: transactions }),

  setTransactionActive: (transaction) => ({
    type: SET_TRANSACTION_ACTIVE,
    payload: transaction,
  }),

  removeAll: () => ({ type: REMOVE_ALL, payload: null }),
};
