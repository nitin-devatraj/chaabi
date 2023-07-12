import React from "react";
import classes from "./Card.module.css";
import AreaChart from "./AreaChart";

function Card(props) {
  const { text, hours, percent, avg, bg } = props;
  return (
    <div className={classes.weekGraph}>
      <h4>{text}</h4>
      <div className={classes.detailsContainer}>
        <div className={classes.details}>
          <p className={classes.hours}>{hours}</p>
          <div className={classes.subDetails}>
            <p className={classes.percent}>
              <i className="fi fi-br-chart-line-up"></i> {percent}
            </p>
            <p className={classes.avg}>{avg}</p>
          </div>
        </div>
        <div className={classes.graph}>
          <AreaChart bg={bg} />
        </div>
      </div>
    </div>
  );
}

export default Card;
