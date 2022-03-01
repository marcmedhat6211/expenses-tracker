import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setEnteredYear] = useState("2020");
  const onFilterHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No results found</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilter={onFilterHandler} />
        {/*
            This is a way to output the array dynamically
            using the map function
            the map function takes a function as a parameter and the function takes the array element as a parameter and it retruns a new array
         */}

        {/*
            react normally works by appending new item to a changed list. and then it rerenders all items of that array to get all the right items
            this can cause some problems if you are using a statefull component for example, because it can cause the lost of this state
            the key prop is important to prevent any errors while rendering the list, as it doesn't let react rerenders all the list again
        */}

        {/* This is one way of making a conditional content simply by using a ternary operator */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* 
            Another way of making a conditional content 
            this way is a bit strange but you'll find it in many react projects
            you just write an expression with an && in between and js will simply return the second condition if the first one is met
        */}
        {/* {filteredExpenses.length === 0 && <p>No results found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* 
            Another way of making a conditional content 
            You can simply move the logic to make it up there where all the logic is
        */}
        {/* {expensesContent} */}

        {/* 
            Another way of making a conditional content 
            The best way of doing this is by making it a new component
        */}
        <ExpensesList items={filteredExpenses} />

        {/* <ExpenseItem
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
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
