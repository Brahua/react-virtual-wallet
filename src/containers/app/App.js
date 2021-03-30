import AppRoutes from "../../routers/app.routes";
import { Provider } from "react-redux";
import React from "react";
import store from "./../../store/store";

export default function App() {
  return (
    <div data-testid="container-app" className="app">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}
