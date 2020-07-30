import React from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
