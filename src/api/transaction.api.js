import { db } from "../config/firebase-config";
import { TransactionType } from "../const/transaction";

export const TransactionApi = {
  get: (userId, setInformation) => {
    db.collection(`${userId}/wallet/transactions`).onSnapshot((snapshot) => {
      let transactions = [];
      snapshot.forEach((doc) => {
        transactions.push({ id: doc.id, ...doc.data() });
      });
      const [total, totalIncome, totalExpense] = getTotals(transactions);
      setInformation(transactions, total, totalIncome, totalExpense);
    });
  },

  post: async (userId, transaction) => {
    await db.collection(`${userId}/wallet/transactions`).add(transaction);
  },

  put: async (userId, transaction) => {
    await db
      .collection(`${userId}/wallet/transactions`)
      .doc(transaction.id)
      .update(transaction);
  },

  delete: async (userId, transactionId) => {
    await db.collection(`${userId}/wallet/transactions`).doc(transactionId).delete();
  },
};

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
