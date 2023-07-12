import React from "react";
import classes from "./ChapterWiseStatus.module.css";
import PieChart from "./PieChart";

function ChapterWiseStatus() {
  return (
    <section className={classes.container}>
      <h4>Chapter Wise Status</h4>
      <PieChart />
      <section className={classes.detail}>
        <ul className={classes.details}>
          <li>&#128309; Finished Training</li>
          <li>&#128995; Chapter B</li>
          <li>&#128308; Haven't Started Yet</li>
        </ul>
        <ul className={classes.details}>
          <li>&#11044; Chapter A</li>
          <li>&#128994; Chapter C</li>
        </ul>
      </section>
    </section>
  );
}

export default ChapterWiseStatus;
