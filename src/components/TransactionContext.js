import React, { createContext, useState } from "react";

export const TContext = createContext();

export function TransactionProvider(props) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Home",
      amount: 500,
    },
    {
      id: 2,
      title: "Kitchen",
      amount: -150,
    },
    {
      id: 3,
      title: "Wine",
      amount: 100,
    },
    {
      id: 4,
      title: "Dog",
      amount: 10,
    },
  ]);

  return (
    <TContext.Provider value={[transactions, setTransactions]}>
      {props.children}
    </TContext.Provider>
  );
}
