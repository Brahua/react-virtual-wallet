import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { TransactionType } from "../../../const/transaction";
import { useForm } from "../../../hooks/useForm";
import { TransactionActions } from "../../../store/transaction/actions";

export default function TransactionsForm({ title, typeTransaction }) {
  const dispatch = useDispatch();
  const { totalIncome, totalExpense } = useSelector((state) => state.transactions);
  const [value, handleInputChange, reset] = useForm({
    description: "",
    quantity: 0,
    type: typeTransaction,
  });
  const { description, quantity, type } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      TransactionActions.add({
        description,
        quantity: Number(quantity),
        type,
        date: format(new Date(), "dd/MM/yyyy HH:mm"),
      })
    );
    reset();
  };

  const buttonClass = type === TransactionType.INCOME ? "success" : "danger";
  const titleClass = type === TransactionType.INCOME ? "income" : "expense";
  const total = type === TransactionType.INCOME ? totalIncome : totalExpense;

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
