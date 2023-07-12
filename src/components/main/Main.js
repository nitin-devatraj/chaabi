import React from "react";
import classes from "./Main.module.css";
import HeroText from "./hero-text/HeroText";
import Week from "./weekly-graph/Week";
import Report from "./report/Report";
import Footer from "../footer/Footer";

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
        <Report />
        <Footer />
      </section>
    </main>
  );
}

export default Main;
