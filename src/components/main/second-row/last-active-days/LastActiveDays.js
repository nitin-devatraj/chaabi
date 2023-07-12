import React from "react";
import classes from "./LastActiveDays.module.css";
import Chart from "./Chart";

function LastActiveDays() {
  return (
    <section className={classes.section}>
      <section>
        <h4>Last 14 Days Active Workers In Training</h4>
        <h4>Last 14 Days</h4>
      </section>
      <Chart />
    </section>
  );
}

export default LastActiveDays;
