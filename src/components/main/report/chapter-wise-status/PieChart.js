import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const data = ["22%", "20%", "7%", "22%", "34%"];

  const chartOptions = {
    chart: {
      type: "pie",
      plotShadow: false,
      width: 250,
      height: 250,
    },
    title: {
      text: "Finished Training",
      align: "center",
      verticalAlign: "middle",
      style: {
        fontWeight: "bold",
        fontSize: "12px",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: true,
          distance: -30,
          format: "{point.name}",
          style: {
            fontSize: "14px",
            color: "black",
            textOutline: "none",
          },
        },
        showInLegend: false,
        states: {
          hover: {
            brightness: 0,
          },
        },
        borderWidth: 1,
        borderColor: "black",
        colors: ["#e7efff", "white", "white", "white", "white"],
      },
    },
    series: [
      {
        name: "Percentage",
        data: data.map((value, index) => ({
          y: parseFloat(value),
          name: value,
        })),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default PieChart;
