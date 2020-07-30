import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/auth/actions";

export default function Layout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthActions.signOut());
  };
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
                  <li className="navigation__route">Movimientos</li>
                </ul>
                <button className="btn btn-sm btn-danger mt-3" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </nav>
            </div>
          </div>
          <div className="col-9">
            <section className="main"></section>
          </div>
        </div>
      </div>
    </>
  );
}
