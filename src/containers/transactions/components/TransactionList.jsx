import Loading from "../../../components/loading/Loading";
import React from "react";
import { TransactionType } from "../../../constants/transaction.types";
import { deleteTransaction } from "../../../store/transactions/actions";
import { useDispatch } from "react-redux";

export default function TransactionList({ uid, transactions }) {
  const dispatch = useDispatch();

  const handleDeleteTransaction = (transaction) => {
    dispatch(deleteTransaction({ uid, transaction }));
  };

  const quantityClass = (type) =>
    type === TransactionType.INCOME ? "text-success" : "text-danger";

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h1>Movimientos</h1>
        <div className="table-responsive">
          {transactions.length === 0 ? (
            <Loading size="small" />
          ) : (
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col">Monto</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <th className={quantityClass(transaction.type)}>
                      S/. {transaction.quantity}
                    </th>
                    <td>{transaction.description}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger mx-1"
                        onClick={() => handleDeleteTransaction(transaction)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
