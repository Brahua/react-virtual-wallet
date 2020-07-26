import React from 'react'
import Feeds from './components/feeds/Feeds'
import Expense from './components/forms/Expense'
import Income from './components/forms/Income'
import Transactions from './components/transactions/Transactions'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/auth/action'
import { format } from 'date-fns'

export default function Dashboard( { history } ) {

  const dispatch = useDispatch();
  const { auth: { name }, ui: { loading }, transactions } = useSelector(state => state);
  const { total, totalIncome, totalExpense } = transactions;

  const handleLogout = () => {
    dispatch(signOut());
  }

  return (
    <div className="container">
      <section className="header mt-5 d-flex justify-content-between align-items-center">
      <h1 style={{color: '#fff'}}>Bienvenido {name}</h1>
        <button type="button" className="btn btn-danger" disabled={loading} onClick={handleLogout}> Salir </button>
      </section>
      <div className="row">
        <div className="col-6">
          <Feeds available={total} date={format(new Date(), 'PP')}/>
          <Transactions />
        </div>
        <div className="col-6">
          <Income incomes={totalIncome}/>
          <Expense expenses={totalExpense}/>
        </div>
      </div>
    </div>
  )
}
