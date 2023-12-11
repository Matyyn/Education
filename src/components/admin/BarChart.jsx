// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {

//   render() {
//     return (
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//         barSize={10}
//       >
//         <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
//       </BarChart>
//     );
//   }
// }
// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';

// const data = [
//   {
//     name: "Page A",
//     students: 4000,
//   },
//   {
//     name: "Page B",
//     students: 2000,
//   },
//   // ...rest of the data
// ];

// const colors = ['#8884d8', '#82ca9d', '#ffc658', '#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Add more colors if needed

// const Example = () => {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       layout="vertical"
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <XAxis type="number" />
//       <YAxis dataKey="name" type="category" />
//       <Tooltip />

//       <CartesianGrid strokeDasharray="3 3" />
//       {data.map((entry, index) => (
//         <Bar key={`bar-${index}`} dataKey="students" fill={colors[index % colors.length]} barSize={10} />
//       ))}
//     </BarChart>
//   );
// }

// export default Example;
import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const data = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380];
  const categories = [
    "Math",
    "Science",
    "English",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Physical Education",
  ];

  const sortedIndices = data
    .map((item, index) => index)
    .sort((a, b) => data[b] - data[a]);
  const sortedData = sortedIndices.map((index) => data[index]);
  const sortedCategories = sortedIndices.map((index) => categories[index]);

  const series = [
    {
      data: sortedData,
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 50,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      },
    },
    colors: [
      "#FF4560",
      "#775DD0",
      "#00E396",
      "#008FFB",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#00E396",
      "#008FFB",
      "#FEB019",
    ], // Add more colors if needed
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: sortedCategories,
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
