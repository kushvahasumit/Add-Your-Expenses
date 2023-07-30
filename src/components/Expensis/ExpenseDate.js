import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div className="date">
        <div className="month">{month} </div>
        <div className="year"> {year} </div>
        <div className="day"> {day} </div>
      </div>
    </div>
  );
}
