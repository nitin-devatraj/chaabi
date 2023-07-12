import React from "react";
import classes from "./ThirdRow.module.css";
import MonthlyTraining from "./monthly-training/MonthlyTraining";
import QuizResults from "./quiz-results/QuizResults";
import DailyTraining from "./daily-training/DailyTraining";

function ThirdRow() {
  return (
    <section className={classes.section}>
      <MonthlyTraining />
      <QuizResults />
      <DailyTraining />
    </section>
  );
}

export default ThirdRow;
