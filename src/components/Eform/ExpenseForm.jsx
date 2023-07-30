import React , {useState}   from 'react'
import "./ExpenseForm.css"

export default function ExpenseForm(props) {

  const [enterTitle,SetTitle] = useState('')
  const [enterAmount,SetAmount] = useState('')
  const [enterDate,SetDate] = useState('')



  const titleChangeHandle = (e) => {
    SetTitle(e.target.value)
  };
  const amountChangeHandle = (e) => {
    SetAmount(e.target.value)
  };

  const dateChangeHandle = (e) => {
    SetDate(e.target.value)
  };

const submitHandler =(e)=>{
e.preventDefault();

const expenseData = {
    title:enterTitle,
    amount:enterAmount,
    date:new Date(enterDate),


}

props.onSave(expenseData)

console.log(expenseData)

SetTitle('');
SetAmount('');
SetDate('');
}

  return (
   <form onSubmit={submitHandler}>
    <div className="newExpense ">
        <div className="newExpenseControl">
            <label  >Title</label>
            <input type="text"  value={enterTitle} onChange={titleChangeHandle} />
        </div>
        <div className="newExpenseControl">
            <label htmlFor="">Amount</label>
            <input type="number" min='1' step='1' value={enterAmount} onChange={amountChangeHandle} />
        </div>
        <div className="newExpenseControl">
            <label htmlFor="">Date</label>
            <input type="date" value={enterDate} onChange={dateChangeHandle}  />
        </div>
        
    </div>
    <div>
        <div className="newExpenseAction">
            <button type='submit'>Add Expenses</button>
        </div>
    </div>
   </form>
  )
}
