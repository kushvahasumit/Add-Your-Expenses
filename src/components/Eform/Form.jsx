import React from 'react'
import './Form.css'
import ExpenseForm from './ExpenseForm'

export default function form(props) {

  const saveExpense =(enterEx)=>{
        const expenseData = {
          ...enterEx,
          id:Math.random().toString()
        }

      
        props.onAddExpense(expenseData)
        
  console.log(expenseData)

  }

  return (
    <div className='from'>
        <ExpenseForm onSave={saveExpense}/>
    </div>
  )
}
