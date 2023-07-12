import React from "react";
import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

function Chart() {
  const dataPoints = [
    { label: "3 jun", value: "100", maxValue: "400" },
    { label: "4 jun", value: "140", maxValue: "400" },
    { label: "5 jun", value: "140", maxValue: "400" },
    { label: "6 jun", value: "230", maxValue: "400" },
    { label: "7 jun", value: "250", maxValue: "400" },
    { label: "8 jun", value: "200", maxValue: "400" },
    { label: "9 jun", value: "220", maxValue: "400" },
    { label: "10 jun", value: "100", maxValue: "400" },
    { label: "11 jun", value: "290", maxValue: "400" },
    { label: "12 jun", value: "350", maxValue: "400" },
    { label: "13 jun", value: "390", maxValue: "400" },
    { label: "14 jun", value: "400", maxValue: "400" },
  ];

  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className={classes.chart}>
      <div className={classes.label}>
        <p>400</p>
        <p>300</p>
        <p>200</p>
        <p>100</p>
        <p>0</p>
        <p></p>
      </div>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
