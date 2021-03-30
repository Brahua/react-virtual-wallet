import "./../styles/Sidebar.scss";

import Loading from "../../../components/loading/Loading";
import React from "react";

export default function Sidebar({ name, total, handleLogout }) {
  return (
    <div data-testid="container-sidebar" className="sidebar p-4">
      <div className="profile d-flex my-3">
        <img
          src="/assets/img/brahua.png"
          alt="profile__img"
          className="profile__img mr-3"
        />
        <div className="profile__information">
          <h2 className="m-0">{name}</h2>
          <small>Saldo disponible</small>
          <div className="d-flex align-items-center">
            <img src="/assets/img/dinero.svg" alt="" width="30px" className="mr-2" />
            <h3 className="m-0">S/. {total || <Loading size="small" />}</h3>
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
  );
}
