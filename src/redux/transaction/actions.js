import { MessageUtil } from "../../utils/message-util"
import { TransactionApi } from "../../api/transaction-api"
import { SET_TRANSACTIONS, SET_TRANSACTION_ACTIVE, SET_TOTAL_INCOME, SET_TOTAL_EXPENSE, SET_TOTAL } from "./action-types"
import { transactionType } from "../../types/transaction"

export const TransactionActions = {
  get: () => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        const transactions = await TransactionApi.get(uid);
        const totalIncome = await TransactionApi.getQuantity(uid, transactionType.INCOME);
        const totalExpense = await TransactionApi.getQuantity(uid, transactionType.EXPENSE);
        dispatch(TransactionActions.setTransactions(transactions));
        dispatch(TransactionActions.setTotalIncome(totalIncome));
        dispatch(TransactionActions.setTotalExpense(totalExpense));
        dispatch(TransactionActions.setTotalAvailable(totalIncome - totalExpense));

        MessageUtil.close();
      } catch (error) {
        MessageUtil.error(error.message);
      }
    }
  },

  add: (transaction) => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        const { transactions, totalIncome, totalExpense, total } = getState().transactions;
        transaction = await TransactionApi.post(uid, transaction);
        dispatch(TransactionActions.setTransactions([transaction, ...transactions]));
        if (transaction.type === transactionType.EXPENSE) {
          dispatch(TransactionActions.setTotalExpense(totalExpense + transaction.quantity));
          dispatch(TransactionActions.setTotalAvailable(total - transaction.quantity));
        } else if (transaction.type === transactionType.INCOME) {
          dispatch(TransactionActions.setTotalIncome(totalIncome + transaction.quantity));
          dispatch(TransactionActions.setTotalAvailable(total + transaction.quantity));
        }

        MessageUtil.success('Se registró correctamente la transacción');
      } catch (error) {
        MessageUtil.error(error.message);
      }
    }
  },

  update: (transaction) => {
    return async (dispatch, getState) => {
      try {
        MessageUtil.loading();

        const { uid } = getState().auth;
        const { transactions, totalExpense, totalIncome, total } = getState().transactions;

        let tEncontrada = transactions.find(t => t.id === transaction.id)
        if (tEncontrada) {
          await TransactionApi.put(uid, transaction);
          tEncontrada.description = transaction.description;
          tEncontrada.quantity = transaction.quantity;
          dispatch(TransactionActions.setTransactions([...transactions]));
          if (transaction.type === transactionType.EXPENSE) {
            dispatch(TransactionActions.setTotalExpense(totalExpense + transaction.quantity));
            dispatch(TransactionActions.setTotalAvailable(total - transaction.quantity));
          } else if (transaction.type === transactionType.INCOME) {
            dispatch(TransactionActions.setTotalIncome(totalIncome + transaction.quantity));
            dispatch(TransactionActions.setTotalAvailable(total + transaction.quantity));
          }
        } 
        
        MessageUtil.success('Se actualizó correctamente la transacción')
      } catch (error) {
        MessageUtil.error(error.message);
      }
    }
  },

  delete: (transaction) => {
    return async (dispatch, getState) => {
      try {
        const result = await MessageUtil.confirmation();
        if (result.value) {
          MessageUtil.loading();
  
          const { uid } = getState().auth;
          const { transactions, totalExpense, totalIncome, total } = getState().transactions;
          let tEncontrada = transactions.find(t => t.id === transaction.id)
          if (tEncontrada) {
            await TransactionApi.delete(uid, transaction.id)
            dispatch(TransactionActions.setTransactions(transactions.filter(t => t.id !== transaction.id)));
            if (transaction.type === transactionType.EXPENSE) {
              dispatch(TransactionActions.setTotalExpense(totalExpense - transaction.quantity));
              dispatch(TransactionActions.setTotalAvailable(total + transaction.quantity));
            } else if (transaction.type === transactionType.INCOME) {
              dispatch(TransactionActions.setTotalIncome(totalIncome - transaction.quantity));
              dispatch(TransactionActions.setTotalAvailable(total - transaction.quantity));
            }
          } 
          
          MessageUtil.success('Se eliminó correctamente la transacción')
        }
      } catch (error) {
        MessageUtil.error(error.message);
      }
    }
  },

  setTotalAvailable: (total) => ({ type: SET_TOTAL, payload: total}),
  
  setTotalIncome: (totalIncome) => ({ type: SET_TOTAL_INCOME, payload: totalIncome }),

  setTotalExpense: (totalExpense) => ({ type: SET_TOTAL_EXPENSE, payload: totalExpense }),

  setTransactions: (transactions) => ({ type: SET_TRANSACTIONS, payload: transactions}),
  
  setTransactionActive: (transaction) => ({ type: SET_TRANSACTION_ACTIVE, payload: transaction}),
}

 