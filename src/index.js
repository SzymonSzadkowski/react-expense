import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Balance from "./components/Balance.js";
import History from "./components/History.js";
import Form from "./components/Form.js";

import { TransactionProvider } from "./components/TransactionContext";

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <div className="app">
        <h1 className="app--title">Expense tracker</h1>
        <Balance />
        <History />
        <Form />
      </div>
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
