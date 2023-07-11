import React from "react";
import classes from "./Main.module.css";
import HeroText from "./HeroText";
import Week from "./weekly-graph/Week";

function Main(props) {
  const heroText = {
    title: "Hello, Puneet Dhiman",
    subTitle: "Following Is Your Organisation's Performance Summary",
  };
  return (
    <main className={classes.main}>
      <HeroText {...heroText} />
      <section className={classes.container}>
        <Week />
      </section>
    </main>
  );
}

export default Main;
