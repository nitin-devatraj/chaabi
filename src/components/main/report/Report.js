import React from "react";
import classes from "./Report.module.css";
import ChapterWiseStatus from "./chapter-wise-status/ChapterWiseStatus";
import LastActiveDays from "./last-active-days/LastActiveDays";

function Report() {
  return (
    <section className={classes.section}>
      <ChapterWiseStatus />
      <LastActiveDays />
    </section>
  );
}

export default Report;
