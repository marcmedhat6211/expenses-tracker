import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
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

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler} type="button">
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
