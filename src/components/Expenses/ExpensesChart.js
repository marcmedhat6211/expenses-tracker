import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  /**
   * Here we are setting the datapoints values for each month by iterating on the chartDataPoints array
   * and setting each month's value to that expense month value from the expense object we are getting through props
   */
  //quick note: this for loop works for arrays only, however if you want to use it on an object you'll replace the 'of' keyword with the 'in' keyword
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January is index 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
