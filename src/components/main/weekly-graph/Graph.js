import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Graph = (props) => {
  useEffect(() => {
    Highcharts.setOptions({
      colors: [`rgb(${props.bg})`],
    });
  }, [props.bg]);

  const config = {
    chart: {
      type: "area",
      height: 130,
      width: 115,
    },
    title: {
      text: undefined,
    },
    accessibility: {
      enabled: false,
    },
    subtitle: {
      text: undefined,
    },
    xAxis: {
      allowDecimals: false,
      gridLineWidth: 0,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      lineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: undefined,
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
    },
    tooltip: {
      pointFormat: undefined,
    },
    plotOptions: {
      area: {
        pointStart: 0,
        lineColor: `rgb(${props.bg})`,
        marker: {
          enabled: false,
          radius: 2,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, `rgb(${props.bg})`],
            [0.7, `rgba(${props.bg},0.3)`],
            [1, `rgba(255,255,255,0)`],
          ],
        },
      },
    },
    series: [
      {
        name: "",
        data: [2, 5, 3, 3, 6, 4, 3],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={config} />;
};

export default Graph;
