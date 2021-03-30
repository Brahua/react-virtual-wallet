import FirebaseApi from "./firebase.api";
import { TransactionType } from "../constants/transaction.types";

export default class TransactionApi extends FirebaseApi {
  static fetchData(userId, set) {
    super.onSnapshot(getPathCollection(userId), (data) => {
      let transactions = [...data];
      const [total, totalIncome, totalExpense] = getTotals(transactions);
      set(transactions, total, totalIncome, totalExpense);
    });
  }

  static get(userId) {
    return super.get(getPathCollection(userId), {});
  }

  static post(userId, transaction) {
    return super.post(getPathCollection(userId), transaction);
  }

  static delete(userId, transactionId) {
    return super.delete(getPathCollection(userId), transactionId);
  }
}

const getPathCollection = (userId) => `${userId}/wallet/transactions`;

const getTotals = (transactions) => {
  const totalIncome = getQuantity(transactions, TransactionType.INCOME);
  const totalExpense = getQuantity(transactions, TransactionType.EXPENSE);
  const total = totalIncome - totalExpense;

  return [total, totalIncome, totalExpense];
};

const getQuantity = (transactions, type) => {
  let total = transactions
    .filter((transaction) => transaction.type === type)
    .reduce((prev, { quantity }) => quantity + prev, 0);

  return total;
};
