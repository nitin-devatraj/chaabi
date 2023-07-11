import React from "react";
import classes from "./HeroText.module.css";

function HeroText(props) {
  return (
    <section className={classes.section}>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
    </section>
  );
}

export default HeroText;
