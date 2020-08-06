import React from "react";
import TransactionsForm from "./components/TransactionForm";
import { TransactionType } from "../../const/transaction";
import TransactionList from "./components/TransactionList";
import "./styles/Transactions.scss";

export default function Transaction() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <TransactionsForm typeTransaction={TransactionType.EXPENSE} title="Gastos" />
        </div>
        <div className="col-6">
          <TransactionsForm typeTransaction={TransactionType.INCOME} title="Ingresos" />
        </div>
      </div>

      <TransactionList />
    </>
  );
}
