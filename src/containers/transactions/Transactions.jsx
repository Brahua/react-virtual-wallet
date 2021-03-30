import "./styles/Transaction.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TransactionApi from "../../api/transaction.api";
import TransactionList from "./components/TransactionList";
import { TransactionType } from "../../constants/transaction.types";
import TransactionsForm from "./components/TransactionForm";
import { getTransactionsDone } from "../../store/transactions/actions";

export default function Transactions() {
  const dispatch = useDispatch();
  const {
    auth: { uid },
    transactions: { transactions, totalIncome, totalExpense },
  } = useSelector((state) => state);

  useEffect(() => {
    TransactionApi.fetchData(uid, (transactions, total, totalIncome, totalExpense) => {
      dispatch(getTransactionsDone({ transactions, total, totalIncome, totalExpense }));
    });
    // dispatch(getTransactions({ uid }));
  }, [dispatch, uid]);

  return (
    <div data-testid="container-transactions" className="transactions">
      <div className="row">
        <div className="col-6">
          <TransactionsForm
            typeTransaction={TransactionType.EXPENSE}
            title="Gastos"
            total={totalExpense}
            uid={uid}
          />
        </div>
        <div className="col-6">
          <TransactionsForm
            typeTransaction={TransactionType.INCOME}
            title="Ingresos"
            total={totalIncome}
            uid={uid}
          />
        </div>
      </div>

      <TransactionList uid={uid} transactions={transactions} />
    </div>
  );
}
