import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // hena e7na 5alena raga3na array of numbers fyh kol el values bta3et el datapoints
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // the Math.max() method expects arguments of numbers NOT an array
  // so we use the ... operator where it converts that array into several numbered params
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
