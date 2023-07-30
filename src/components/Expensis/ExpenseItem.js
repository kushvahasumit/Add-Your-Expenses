import "./ExpenseItem.css";

import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
 
  return (
    <div className="expenseItem">
      <ExpenseDate date={props.date} />
      <div className="expenseDis">
        <h2>{ props.title}</h2>
        <span className="expenseRate">${props.amount}</span>
      </div>
    </div>
  );
}
