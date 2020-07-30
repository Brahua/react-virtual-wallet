import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { TransactionActions } from "../../../../store/transaction/actions";
import { format } from "date-fns";
import { TransactionType } from "../../../../const/transaction";
import "./../../styles/TransactionForm.scss";

export default function TransactionsForm({ initialValue }) {
  const dispatch = useDispatch();
  const income = {
    description: "",
    quantity: 0,
    type: TransactionType.INCOME,
  };
  const [value, handleInputChange, reset] = useForm(income);
  const { description, quantity, type } = value;
  console.log(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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

  return (
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
  );
}
