import React from "react";
import classes from "./MonthlyTraining.module.css";

function MonthlyTraining() {
  return (
    <div className={classes.card}>
      <h4>Monthly Training Activity</h4>
      <p>
        <i className={"fi fi-rr-arrow-up " + classes.i}> </i>
        16% more enrollees this month
      </p>
      <dl>
        <dt>
          <i className={classes.dt_i}>&#9675; </i>course a
        </dt>
        <dd>23 Workers Took This Course This Week</dd>
        <dt>
          <i className={classes.dt_i}>&#9675; </i>course b
        </dt>
        <dd>253 Workers Took This Course This Week</dd>
        <dt>
          <i className={classes.dt_i}>&#9675; </i>course c
        </dt>
        <dd>253 Workers Took This Course This Week</dd>
        <dt>
          <i className={classes.dt_i}>&#9675; </i>course d
        </dt>
        <dd>253 Workers Took This Course This Week</dd>
      </dl>
    </div>
  );
}

export default MonthlyTraining;
