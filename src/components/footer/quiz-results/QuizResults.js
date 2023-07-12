import React from "react";
import classes from "./QuizResults.module.css";
import DonutChart from "./DonutChart";

function QuizResults() {
  return (
    <div className={classes.card}>
      <h4>Quiz Passing %</h4>
      <div className={classes.chart_details}>
        <DonutChart />
        <div className={classes.right}>
          <dl>
            <dt>&#128308; passed</dt>
            <dd>1423 Workers</dd>
            <dt>&#128994; failed</dt>
            <dd>134 Workers</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default QuizResults;
