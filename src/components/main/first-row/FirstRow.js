import React from "react";
import classes from "./FirstRow.module.css";
import Card from "./Card";

function FirstRow() {
  const cards = [
    {
      text: "In Training Workers",
      hours: "3,354",
      percent: "20%",
      avg: "234",
      bg: "14,147,75",
      id: Math.random(),
    },
    {
      text: "Video Watch-Time (Hrs)",
      hours: "2,433",
      percent: "20%",
      avg: "435",
      bg: "237,45,52",
      id: Math.random(),
    },
    {
      text: "% Workers Passing Quiz",
      hours: "95%",
      percent: "20%",
      avg: "24%",
      bg: "14,147,75",
      id: Math.random(),
    },
    {
      text: "Avg. Days Taken",
      hours: "6",
      percent: "20%",
      avg: "3",
      bg: "14,147,75",
      id: Math.random(),
    },
  ];

  return (
    <section className={classes.section}>
      {cards.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </section>
  );
}

export default FirstRow;
