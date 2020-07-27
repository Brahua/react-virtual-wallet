import React from "react";
import "./Income.scss";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { transactionType } from "../../../../types/transaction";
import { TransactionActions } from "../../../../redux/transaction/actions";
import { format } from "date-fns";

export default function Income({ incomes }) {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    description: "",
    quantity: 0,
    type: transactionType.INCOME,
  });

  const { description, quantity, type } = values;

  const handleAddTransaction = (e) => {
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

  return (
    <div className="mb-4 p-4 income-form">
      <form onSubmit={handleAddTransaction}>
        <h5>Ingresos: S/. {incomes}</h5>
        <small>Registrar ingreso</small>
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
            <button type="submit" className="btn btn-outline-success mb-2">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
