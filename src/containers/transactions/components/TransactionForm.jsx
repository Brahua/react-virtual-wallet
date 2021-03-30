import "./../styles/TransactionForm.scss";

import React from "react";
import { TransactionType } from "../../../constants/transaction.types";
import { format } from "date-fns";
import { postTransaction } from "../../../store/transactions/actions";
import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";

export default function TransactionsForm({ title, typeTransaction, total, uid }) {
  const dispatch = useDispatch();
  const [value, handleInputChange, reset] = useForm({
    description: "",
    quantity: 0,
    type: typeTransaction,
  });
  const { description, quantity, type } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      description,
      quantity: Number(quantity),
      type,
      date: format(new Date(), "dd/MM/yyyy HH:mm"),
    };
    dispatch(postTransaction({ uid, transaction }));
    reset();
  };

  const buttonClass = type === TransactionType.INCOME ? "success" : "danger";
  const titleClass = type === TransactionType.INCOME ? "income" : "expense";

  return (
    <div className="transaction-form p-4">
      <h5
        className={`transaction-form__title--${titleClass}`}
      >{`${title}: S/. ${total}`}</h5>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={handleInputChange}
              value={description}
            />
          </div>
          <div className="col-5">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              name="quantity"
              onChange={handleInputChange}
              value={quantity}
            />
          </div>
          <div className="col-2">
            <button type="submit" className={`btn btn-outline-${buttonClass} mb-2`}>
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
