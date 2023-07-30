import "./App.css";
import Expenses from "./components/Expensis/Expenses";
 import Form from "./components/Eform/Form";
import React,{useState} from "react";

let Dummy = [
  {
    id: "e1",
    title: "school Fees",
    amount: 400,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e2",
    title: "House Rent",
    amount: 800,
    date: new Date(2021, 3, 30),
  },
  {
    id: "e3",
    title: "Daily Food ",
    amount: 200,
    date: new Date(2021, 4, 4),
  },
];


const App = (props) => {

  const [expenses,setExpense]=useState(Dummy);


  const addExpense =(expense)=>{
     const updateExpense = [expense, ...expenses];
     setExpense(updateExpense)
     console.log(expense)
}
  return (
    <div>
      <h1 className="App"> <u> Let's Count Expenses</u></h1>
      <Form onAddExpense={addExpense}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
