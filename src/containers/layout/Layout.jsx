import "./styles/Layout.scss";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import Sidebar from "./components/Sidebar";
import { signOut } from "../../store/auth/actions";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const {
    auth: { name },
    transactions: { total },
  } = useSelector((state) => state);
  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <div data-testid="container-layout" className="layout">
      <div className="layout__bg-principal m-0"></div>
      <div className="layout__bg-border m-0"></div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3">
            <Sidebar name={name} total={total} handleLogout={handleLogout} />
          </div>
          <div className="col-9">
            <section className="layout__main">{children}</section>
          </div>
        </div>
      </div>
    </div>
  );
}
