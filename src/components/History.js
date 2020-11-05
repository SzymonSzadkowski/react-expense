import React, { useContext } from "react";
import "./History.scss";
import HistoryItem from "./HistoryItem";
import { TContext } from "./TransactionContext";

export default function History() {
  const [transactions, setTransactions] = useContext(TContext);
  return (
    <section className="payment-history">
      <h3 className="payment-history--title">History</h3>
      <ul className="payment-history--list">
        {transactions.map((transaction) => {
          return <HistoryItem transaction={transaction} />;
        })}
      </ul>
    </section>
  );
}
