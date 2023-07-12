import React from "react";
import classes from "./Footer.module.css";
import MonthlyTraining from "./monthly-training/MonthlyTraining";
import QuizResults from "./quiz-results/QuizResults";
import DailyTraining from "./daily-training/DailyTraining";

function Footer() {
  return (
    <section className={classes.wrapper}>
      <MonthlyTraining />
      <QuizResults />
      <DailyTraining />
    </section>
  );
}

export default Footer;
