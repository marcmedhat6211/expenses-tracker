import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("");
  const onFilterHandler = (year) => {
    setEnteredYear(enteredYear);
  };

  return (
    <div>
      <ExpensesFilter onFilter={onFilterHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
