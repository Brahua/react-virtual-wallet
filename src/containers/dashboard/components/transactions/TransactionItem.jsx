import React from 'react'
import { transactionType } from '../../../../types/transaction'
import { useDispatch } from 'react-redux';
import { TransactionActions } from '../../../../redux/transaction/actions';

export default function TransactionItem({id, description, quantity, type, date}) {

  const dispatch = useDispatch();

  const handleClickTransaction = () => {
    dispatch(TransactionActions.delete({id, type, quantity}));
    // dispatch(TransactionActions.setTransactionActive({ id, description, quantity, type, date }));
  }
  
  return (
    <div className="mb-2 transaction" onClick={handleClickTransaction}>
      <h5 className={`transaction--${type === transactionType.EXPENSE ? 'expense': 'income'}`}>S/. {quantity}</h5>
      <div className="d-flex justify-content-between">
        <span>{description}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}
