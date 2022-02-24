//that is how you import a css file in your component
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//the name of the file convention should be as if it is a class in php
// a component in react is just a js function
function ExpenseItem(props) {
  // return <div>item</div><div>djdsiajdsa</div> this syntax is wrong
  //one important rule (the return statement must only return ONE root element)

  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  //you injext a variable by using {}
  //toISOString method changes date to string

  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/*as long as the component does not have contents between tags it can be written like this*/}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
