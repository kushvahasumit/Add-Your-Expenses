import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map((expensed) => (
        <ExpenseItem
          date={expensed.date}
          title={expensed.title}
          amount={expensed.amount}
        />
      ))}
    </div>
  );
}
