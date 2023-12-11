import React from "react";
import Chart from "react-apexcharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const series = data.map((item) => item.value);
const labels = data.map((item) => item.name);

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: series,
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="80"
        />
      </div>
    );
  }
}

export default Example;
