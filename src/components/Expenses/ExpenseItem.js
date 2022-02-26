//that is how you import a css file in your component
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//the name of the file convention should be as if it is a class in php
// a component in react is just a js function
const ExpenseItem = (props) => {
  // return <div>item</div><div>djdsiajdsa</div> this syntax is wrong
  //one important rule (the return statement must only return ONE root element)

  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  //you injext a variable by using {}
  //toISOString method changes date to string

  // it is recommended to use that naming convention => (if it is an event the function name ends with Handler keyword)
  const clickHandler = () => {
    console.log("clickeddd!!");
  };

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/*as long as the component does not have contents between tags it can be written like this*/}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* to add an event listener in react we have to use the word on first */}
      {/* when you call a function in an event listener you just 'point' at the function by writting its name WITHOUT parenthesis */}
      {/* that happens because if we wrote parenthesis the function will be excecuted when the JSX code is being parsed and that is too late */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
