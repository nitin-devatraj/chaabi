import React from "react";
import classes from "./SecondRow.module.css";
import ChapterWiseStatus from "./chapter-wise-status/ChapterWiseStatus";
import LastActiveDays from "./last-active-days/LastActiveDays";

function SecondRow() {
  return (
    <section className={classes.section}>
      <ChapterWiseStatus />
      <LastActiveDays />
    </section>
  );
}

export default SecondRow;
