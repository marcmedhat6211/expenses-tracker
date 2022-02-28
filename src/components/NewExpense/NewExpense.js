import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  /**
   * This is how you pass data from a child component to a parent component
   * You'll deal with it as if it is props
   * You just create your own event listener which is in this case the 'onSaveExpenseDataHandler'
   * You then pass a param to the onSaveExpenseDataHandler method which is the data coming from the child component
   * and then you do whatever you want to do in that method
   */
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
