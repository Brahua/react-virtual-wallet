import React from 'react'
import './Expense.scss';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { transactionType } from '../../../../types/transaction';
import { TransactionActions } from '../../../../redux/transaction/actions';
import { format } from 'date-fns'

export default function Expense({expenses}) {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    description: '',
    quantity: 0,
    type: transactionType.EXPENSE,
  })

  const { description, quantity, type } = values;

  const handleAddExpense = (e) => {
    e.preventDefault();
    dispatch(
      TransactionActions.add({ 
        description, 
        quantity: Number(quantity), 
        type, 
        date: format(new Date(), 'dd/MM/yyyy') 
      })
    );
    reset();
  }


  return (
      <div className="card-body expense-form">
        <form onSubmit={handleAddExpense}>
          <h5>Gastos: S/. {expenses}</h5>
          <small>Registrar gasto</small>
          <div className="form-row">
            <div className="col-5">
              <input type="text" className="form-control" placeholder="Description" name="description" 
                onChange={handleInputChange} value={description}/>
            </div>
            <div className="col-5">
              <input type="number" className="form-control" placeholder="Quantity" name="quantity"
                onChange={handleInputChange} value={quantity}/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-outline-danger mb-2">Guardar</button>
            </div>
          </div>
        </form>
      </div>
  )
}
