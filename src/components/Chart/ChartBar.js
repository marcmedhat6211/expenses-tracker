import React from "react";
import "./Chart.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // this here is the syntax if you want to add inline css
          // imp note: the double curly braces is not a default syntax, but the style attr needs an object
          // note: if you want to add any css property that has a - like for ex background-color, you have to put it between single quotes OR backgroundColor
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
