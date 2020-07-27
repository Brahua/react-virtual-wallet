import React, { useEffect } from "react";
import TransactionItem from "./TransactionItem";
import "./Transactions.scss";
import { useDispatch, useSelector } from "react-redux";
import { TransactionActions } from "../../../../redux/transaction/actions";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(TransactionActions.get());
  }, [dispatch]);

  return (
    <section className="transactions-container my-4">
      <h5 style={{ color: "#fff" }}>Movimientos: </h5>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} {...transaction} />
      ))}
    </section>
  );
}
