import React, { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "./Card"
import "../styles/Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangedHandler}
          selected={filteredYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
