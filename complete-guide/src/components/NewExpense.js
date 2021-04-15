import React from "react"
import ExpenseForm from "./ExpenseForm"

import "../styles/NewExpense.css"

const newExpense = (props) => {
  //children to parent communication
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default newExpense
