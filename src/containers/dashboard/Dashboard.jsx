import React from "react";
import Feeds from "./components/feeds/Feeds";
import ExpenseForm from "./components/forms/ExpenseForm";
import IncomeForm from "./components/forms/IncomeForm";
import Transactions from "./components/transactions/Transactions";
import { format } from "date-fns";

export default function Dashboard({ history }) {
  // const dispatch = useDispatch();
  // const {
  //   auth: { name },
  //   transactions,
  // } = useSelector((state) => state);
  // const { total, totalIncome, totalExpense } = transactions;

  // const handleLogout = () => {
  //   dispatch(signOut());
  // };

  return (
    <>
      <div className="bg-principal m-0"></div>
      <div className="bg-border m-0"></div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="sidebar p-4">
              <div className="profile d-flex my-3">
                <img
                  src="/assets/img/brahua.png"
                  alt="profile__img"
                  className="profile__img mr-3"
                />
                <div className="profile__information">
                  <h2 className="m-0">Josue Bravo</h2>
                  <small>Saldo disponible</small>
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets/img/dinero.svg"
                      alt=""
                      width="30px"
                      className="mr-2"
                    />
                    <h3 className="m-0">S/. 1000.00</h3>
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
          <div className="col-9">
            <section className="main">
              <div className="row">
                <div className="col-6">
                  <ExpenseForm expenses="S/. 100" />
                </div>
                <div className="col-6">
                  <IncomeForm incomes="S/. 100" />
                </div>
              </div>

              <div className="transactions mt-3">
                <h1>Movimientos</h1>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
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
