import React, { useContext } from "react";
import "./History.scss";
import { TContext } from "./TransactionContext";

export default function HistoryItem(props) {
  const [transactions, setTransactions] = useContext(TContext);
  const borderColor =
    props.transaction.amount >= 0 ? "4px solid green" : "4px solid red";

  const deleteItem = (e) => {
    setTransactions(
      transactions.filter((item) => {
        if (item.id !== props.transaction.id) {
          return item;
        } else {
          return;
        }
      })
    );
  };

  return (
    <li className="list--item" style={{ borderRight: borderColor }}>
      <button className="list--item-delete" onClick={deleteItem}>
        X
      </button>
      <p className="list--item-title">{props.transaction.title}</p>
      <p className="list--item-amount">{props.transaction.amount}</p>
    </li>
  );
}
