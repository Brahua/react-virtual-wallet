import React from "react";
import TransactionForm from "./TransactionForm";
import { TransactionType } from "../../../../const/transaction";
import "./../../styles/TransactionForm.scss";

export default function ExpenseForm({ expenses }) {
  const expense = {
    description: "",
    quantity: 0,
    type: TransactionType.EXPENSE,
  };

  return (
    <div className="transaction-form p-4">
      <h5 className="transaction-form__title--expense">{`Gastos: S/.${expenses}`}</h5>
      <small>Registrar gasto</small>
      <TransactionForm transaction={expense} />
    </div>
  );
}
