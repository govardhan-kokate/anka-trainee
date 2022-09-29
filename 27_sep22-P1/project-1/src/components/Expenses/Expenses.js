import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
//import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpenses} />
       <ExpenseList items={filteredExpenses}/>
      </div>
    </div>
  );
};
export default Expenses;
