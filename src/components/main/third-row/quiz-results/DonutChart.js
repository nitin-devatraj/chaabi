import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import classes from "./QuizResults.module.css";

const DonutChart = () => {
  const part1Percentage = 65;
  const part1Color = "green";
  const part2Percentage = 100 - part1Percentage;
  const part2Color = "red";

  const chartOptions = {
    chart: {
      type: "pie",
      plotShadow: false,
      width: 180,
      height: 180,
    },
    title: {
      text: undefined,
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
        states: {
          hover: {
            brightness: 0,
          },
        },
        borderWidth: 0,
        startAngle: 220,
        endAngle: -100,
        colors: [part1Color, part2Color],
      },
    },
    series: [
      {
        name: "Percentage",
        data: [
          {
            y: part1Percentage,
            name: `${part1Percentage}%`,
          },
          {
            y: part2Percentage,
            name: `${part2Percentage}%`,
          },
        ],
      },
    ],
  };

  return (
    <div className={classes.left}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default DonutChart;
