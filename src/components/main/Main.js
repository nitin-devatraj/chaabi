import React from "react";
import classes from "./Main.module.css";
import HeroText from "./hero-text/HeroText";

import FirstRow from "./first-row/FirstRow";
import SecondRow from "./second-row/SecondRow";
import ThirdRow from "./third-row/ThirdRow";

function Main() {
  const heroText = {
    title: "Hello, Puneet Dhiman",
    subTitle: "Following Is Your Organisation's Performance Summary",
  };
  return (
    <main className={classes.main}>
      <HeroText {...heroText} />
      <section className={classes.container}>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </section>
    </main>
  );
}

export default Main;
