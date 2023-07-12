import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const OlympicMedalTable = () => {
  const options = {
    chart: {
      type: "column",
      width: 450,
      height: 250,
    },
    title: {
      text: null, // Remove the title
    },
    xAxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T"], // Initial letter of the day
      gridLineWidth: 1, // Show horizontal grid lines
      gridLineColor: "#e9e9e9", // Customize the grid line color
    },
    yAxis: {
      min: 0,
      max: 160,
      tickInterval: 40,
      title: {
        text: null, // Remove the y-axis title
      },
      labels: {
        align: "left",
        x: -30,
        y: 0, // Adjust the label position
        formatter: function () {
          return this.value; // Add custom label format
        },
      },
      gridLineWidth: 0, // Remove the vertical grid lines
    },
    tooltip: {
      enabled: false, // Disable tooltip
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
            [0, "#0d62ff"], // Upper 50% color
            [0.5, "#0d62ff"], // Upper 50% color
            [0.5, "#e7efff"], // Bottom 50% color
            [1, "#e7efff"], // Bottom 50% color
          ],
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend marker
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

export default OlympicMedalTable;
