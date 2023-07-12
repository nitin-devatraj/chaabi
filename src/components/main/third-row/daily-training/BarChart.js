import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TrainingCompletionChart = () => {
  const options = {
    chart: {
      type: "column",
      width: 450,
      height: 230,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T"],
      gridLineWidth: 1,
      gridLineColor: "#e9e9e9",
    },
    yAxis: {
      min: 0,
      max: 160,
      tickInterval: 40,
      title: {
        text: null,
      },
      labels: {
        align: "left",
        x: -10,
        y: 0,
        formatter: function () {
          return this.value;
        },
      },
      gridLineWidth: 0,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, "#0d62ff"],
            [0.5, "#0d62ff"],
            [0.5, "#e7efff"],
            [1, "#e7efff"],
          ],
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [60, 110, 80, 110, 80, 130, 80, 60, 90, 80],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TrainingCompletionChart;
