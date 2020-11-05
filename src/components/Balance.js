import React, { useContext } from "react";
import "./Balance.scss";
import { TContext } from "./TransactionContext";

export default function Balance(props) {
  const [transactions, setTransactions] = useContext(TContext);

  const income = () => {
    let incomeNumber = 0;
    transactions.map((item) => {
      if (item.amount >= 0) {
        incomeNumber += item.amount;
      }
    });
    return incomeNumber;
  };

  const expense = () => {
    let expenseNumber = 0;
    transactions.map((item) => {
      if (item.amount < 0) {
        expenseNumber -= item.amount;
      }
    });
    return expenseNumber;
  };
  return (
    <section>
      <h3>This is your balance</h3>
      <p className="total">{income() - expense()}</p>
      <div className="spending-box">
        <div className="spending-box--income">
          <h4>income</h4>
          <p>{income()}</p>
        </div>
        <div className="spending-box--expense">
          <h4>expense</h4>
          <p>{expense()}</p>
        </div>
      </div>
    </section>
  );
}
