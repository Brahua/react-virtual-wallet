import React from "react";
import Feeds from "./components/feeds/Feeds";
import ExpenseForm from "./components/forms/ExpenseForm";
import IncomeForm from "./components/forms/IncomeForm";
import Transactions from "./components/transactions/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "./../../store/auth/actions";
import { format } from "date-fns";

export default function Dashboard({ history }) {
  const dispatch = useDispatch();
  const {
    auth: { name },
    transactions,
  } = useSelector((state) => state);
  const { total, totalIncome, totalExpense } = transactions;

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      <div className="jumbotron bg-principal mb-0">
        <div className="row">
          <div className="col-9 offset-3 d-flex justify-content-between">
            <ExpenseForm expenses="S/. 100" />
            <IncomeForm incomes="S/. 100" />
          </div>
        </div>
      </div>
      <div className="bg-border mt-0"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar mx-4 py-3 px-5">
            <div className="profile my-3">
              <div className="d-flex">
                <img
                  src="/assets/img/brahua.png"
                  alt=""
                  className="profile__img mr-3"
                  width="100px"
                />
                <div className="profile__information">
                  <h3 className="m-0">Josue Bravo</h3>
                  <small>Saldo disponible</small>
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src="/assets/img/dinero.svg"
                      alt=""
                      width="40px"
                      className="mr-2"
                    />
                    <h3>S/. 1000.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <nav className="navigation mb-3">
              <ul className="navigation__list">
                <li className="navigation__route"> Panel Principal </li>
                <li className="navigation__route"> Movimientos </li>
                <li className="navigation__route"> Ahorros </li>
                <li className="navigation__route"> Objetivos </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Dashboard({ history }) {
//   const dispatch = useDispatch();
//   const {
//     auth: { name },
//     transactions,
//   } = useSelector((state) => state);
//   const { total, totalIncome, totalExpense } = transactions;

//   const handleLogout = () => {
//     dispatch(signOut());
//   };

//   return (
//     <div className="container">
//       <section className="header mt-5 d-flex justify-content-between align-items-center">
//         <h1 style={{ color: "#fff" }}>Bienvenido {name}</h1>
//         <button type="button" className="btn btn-danger" onClick={handleLogout}>
//           Salir
//         </button>
//       </section>
//       <div className="row">
//         <div className="col-6">
//           <Feeds available={total} date={format(new Date(), "PP")} />
//           <Transactions />
//         </div>
//         <div className="col-6">
//           <Income incomes={totalIncome} />
//           <Expense expenses={totalExpense} />
//         </div>
//       </div>
//     </div>
//   );
// }
