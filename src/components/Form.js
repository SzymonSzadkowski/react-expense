import React, { Component, useContext, useState } from "react";
import "./Form.scss";
import { TContext } from "./TransactionContext";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useContext(TContext);

  const changeSubmit = (e) => {
    const id = Math.floor(Math.random() * 1000);
    e.preventDefault();
    if ((title === "") | (amount === "")) {
      return;
    } else {
      console.log(transactions);
      setTransactions([...transactions, { title, amount, id }]);
      setTitle("");
      setAmount("");
    }
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  return (
    <div className="form-box" onSubmit={changeSubmit}>
      <h3 className="form-box--title">Add the transaction</h3>
      <form className="form-box--form">
        <label htmlFor="name">Title</label>
        <input
          className="form-box--form--title"
          type="text"
          placeholder="Type the title"
          name="title"
          value={title}
          onChange={updateTitle}
        />
        <label htmlFor="amount">Amount</label>
        <input
          className="form-box--form--amount"
          type="number"
          placeholder="$"
          name="amount"
          value={amount}
          onChange={updateAmount}
        />
        <button className="form-box--form--btn" type="submit">
          add to list
        </button>
      </form>
    </div>
  );
}
