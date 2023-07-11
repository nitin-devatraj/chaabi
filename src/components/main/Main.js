import React from "react";
import classes from "./Main.module.css";
import HeroText from "./HeroText";

function Main(props) {
  return (
    <main className={classes.main}>
      <HeroText
        title="Hello, Puneet Dhiman"
        subTitle="Following Is Your Organisation's Performance Summary"
      />
      <section className={classes.container}></section>
    </main>
  );
}

export default Main;
