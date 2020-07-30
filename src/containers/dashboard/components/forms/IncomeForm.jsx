import React from "react";
import { TransactionType } from "../../../../const/transaction";
import TransactionForm from "./TransactionForm";
import "./../../styles/TransactionForm.scss";

export default function Income({ incomes }) {
  const income = {
    description: "",
    quantity: 0,
    type: TransactionType.INCOME,
  };

  return (
    <div className="transaction-form p-4">
      <h5 className="transaction-form__title--income">{`Ingresos: S/.${incomes}`}</h5>
      <small>Registrar ingreso</small>
      <TransactionForm transaction={income} />
    </div>
  );
}
