import { db } from './../libs/firebase-config';

export const TransactionApi = {
  get: async (userId) => {
    let transactions = await (await db.collection(`${userId}/wallet/transactions`).get()).docChanges().reverse();
    transactions = transactions.map(({ doc }) => ({ id: doc.id, ...doc.data() }));
    // const transactionsSnap = await db.collection(`${userId}/wallet/transactions`).get();
    // transactionsSnap.forEach((doc) => {
    //   transactions = [{ id: doc.id, ...doc.data()}, ...transactions];
    //   // transactions.push({ id: doc.id, ...doc.data()})
    // })
    return transactions;
  },

  post: async (userId, transaction) => {
    const docRef = await db.collection(`${userId}/wallet/transactions`).add(transaction);
    transaction = { id: docRef.id, ...transaction };
    return transaction;
  },

  getQuantity: async (userId, transactionType) => {
    let transactions = (await db.collection(`${userId}/wallet/transactions`).where('type', '==', transactionType).get()).docChanges();
    transactions = transactions.map(({ doc }) => ({ id: doc.id, ...doc.data() }));
    const total = transactions.reduce((prev, {quantity}) => quantity + prev, 0);
    return total;
  },

  put: async(userId, transaction) => {
    await db.collection(`${userId}/wallet/transactions`).doc(transaction.id).set(transaction);
  },

  delete: async(userId, transactionId) => {
    await db.collection(`${userId}/wallet/transactions`).doc(transactionId).delete();
  }

}