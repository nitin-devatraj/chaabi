import React from "react";
import classes from "./Dailytraining.module.css";
import BarChart from "./BarChart";

function DailyTraining() {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <h4>Daily Training Completions</h4>
        <h4>Last 7 Days</h4>
      </div>
      <div className={classes.chart}>
        <BarChart />
      </div>
    </div>
  );
}

export default DailyTraining;
