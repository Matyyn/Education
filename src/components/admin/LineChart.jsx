import React, { PureComponent } from "react";
import Chart from "react-apexcharts";
import User from "../../assets/icons/User.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Up from "../../assets/icons/Up.svg";
import Cap from "../../assets/icons/Cap.svg";
import Grad from "../../assets/icons/Graduate.svg";
import Select from "@mui/material/Select";
import Downfall from "../../assets/icons/Downfall.svg";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2250,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChart = ({ option }) => {
  if (option === "1") {
    const series = [
      {
        name: "uv",
        data: data.map((item) => item.uv),
      },
    ];

    const options = {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data.map((item) => item.name),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#7466F0"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(116, 102, 240, 0.7)",
              opacity: 0.9,
            },
            {
              offset: 90,
              color: "rgba(116, 102, 240, 0.9)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(116, 102, 240, 0.9)",
              opacity: 0.3,
            },
          ],
        },
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    };
    const containerClasses = "bg-white rounded-xl shadow-md mt-2";

    return (
      <div
        className={containerClasses + " sm:w-full md:w-2/5 lg:w-1/5 xl:w-1/5"}
      >
        <div className="px-4">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <p className="font-semibold text-violet-500 py-2 w-10 h-10 align-middle bg-purple-2 rounded-full m-1 p-1 mb-2 text-sm">
              KWD
            </p>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <InputLabel id="demo-select-small-label">Weekly</InputLabel>
              <Select
                sx={{ height: 20 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={"weekly"}
                label="Weekly"
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Day"}>Day</MenuItem>
                <MenuItem value={"Montly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <h1 className="font-bold text-start text-2xl mb-2">1,234.54 KWD</h1>
          <p className="flex text-sm ">
            Revenue{" "}
            <div className="flex flex-row ml-2 gap-2">
              <img src={Up} alt="" className="h-6 w-6" />
              <p className="text-[#50CD89] text-sm">7.2%</p>
            </div>
          </p>
        </div>
        <div className="chart">
          <Chart options={options} series={series} type="area" height={145} />
        </div>
      </div>
    );
  } else if (option === "2") {
    const containerClasses = "bg-white rounded-xl shadow-md mt-2";
    const series = [
      {
        name: "uv",
        data: data.map((item) => item.uv),
      },
    ];

    const options = {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data.map((item) => item.name),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#FF9920"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 153, 32, 0.7)",
              opacity: 0.9,
            },
            {
              offset: 90,
              color: "rgba(255, 153, 32, 0.9)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(255, 153, 32, 0.9)",
              opacity: 0.3,
            },
          ],
        },
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    };
    return (
      <div
        className={containerClasses + " sm:w-full md:w-2/5 lg:w-1/5 xl:w-1/5"}
      >
        <div className="px-4">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <p className="font-semibold text-orange-300 py-2 px-2 w-10 h-10 align-middle bg-orange-50 rounded-full m-1 p-1 mb-2 text-sm">
              <img src={Cap} alt="" />
            </p>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <InputLabel id="demo-select-small-label">Weekly</InputLabel>
              <Select
                sx={{ height: 20 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={"weekly"}
                label="Weekly"
                // onChange={}
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Day"}>Day</MenuItem>
                <MenuItem value={"Montly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <h1 className="font-bold text-start text-2xl mb-2">152</h1>
          <p className="flex text-sm ">
            Courses Added
            <div className="flex flex-row ml-2 gap-2">
              <img src={Up} alt="" className="h-6 w-6" />
              <p className="text-[#50CD89] text-sm">7.2%</p>
            </div>
          </p>
        </div>
        <div className="chart">
          <Chart options={options} series={series} type="area" height={145} />
        </div>
      </div>
    );
  } else if (option === "3") {
    const containerClasses = "bg-white rounded-xl shadow-md mt-2";
    const series = [
      {
        name: "uv",
        data: data.map((item) => item.uv),
      },
    ];

    const options = {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data.map((item) => item.name),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#178582"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(23, 133, 130, 0.7)",
              opacity: 0.9,
            },
            {
              offset: 90,
              color: "rgba(23, 133, 130, 0.9)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(23, 133, 130, 0.9)",
              opacity: 0.3,
            },
          ],
        },
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    };
    return (
      <div
        className={containerClasses + " sm:w-full md:w-2/5 lg:w-1/5 xl:w-1/5"}
      >
        <div className="px-4">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <p
              className="font-semibold text-orange-300 py-2 px-2 w-10 h-10 align-middle rounded-full m-1 p-1 mb-2 text-sm"
              style={{ backgroundColor: "rgba(23, 133, 130, 0.12)" }}
            >
              <img src={Grad} />
            </p>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <InputLabel id="demo-select-small-label">Weekly</InputLabel>
              <Select
                sx={{ height: 20 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={"weekly"}
                label="Weekly"
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Day"}>Day</MenuItem>
                <MenuItem value={"Montly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <h1 className="font-bold text-start text-2xl mb-2">90</h1>
          <p className="flex text-sm ">
            Teachers
            <div className="flex flex-row ml-2 gap-2">
              <img src={Downfall} alt="" className="h-6 w-6" />
              <p className="text-[#F23985] text-sm">7.2%</p>
            </div>
          </p>
        </div>
        <div className="chart">
          <Chart options={options} series={series} type="area" height={145} />
        </div>
      </div>
    );
  } else if (option === "4") {
    const containerClasses = "bg-white rounded-xl shadow-md mt-2";
    const series = [
      {
        name: "uv",
        data: data.map((item) => item.uv),
      },
    ];

    const options = {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data.map((item) => item.name),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#F1416C"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(241, 65, 108, 0.7)",
              opacity: 0.9,
            },
            {
              offset: 90,
              color: "rgba(241, 65, 108, 0.9)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(241, 65, 108, 0.9)",
              opacity: 0.3,
            },
          ],
        },
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    };
    return (
      <div
        className={containerClasses + " sm:w-full md:w-2/5 lg:w-1/5 xl:w-1/5"}
      >
        <div className="px-4">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <p className="font-semibold text-orange-300 py-2 px-2 w-10 h-10 align-middle bg-[rgba(114,57,234,0.12)] rounded-full m-1 p-1 mb-2 text-sm">
              <img src={User} />
            </p>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <InputLabel id="demo-select-small-label">Weekly</InputLabel>
              <Select
                sx={{ height: 20 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={"weekly"}
                label="Weekly"
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Day"}>Day</MenuItem>
                <MenuItem value={"Montly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <h1 className="font-bold text-start text-2xl mb-2">152</h1>
          <p className="flex text-sm ">
            Students{" "}
            <div className="flex flex-row ml-2 gap-2">
              <img src={Downfall} alt="" className="h-6 w-6" />
              <p className="text-[#F23985] text-sm">7.2%</p>
            </div>
          </p>
        </div>
        <div className="chart">
          <Chart options={options} series={series} type="area" height={145} />
        </div>
      </div>
    );
  }
};
export default LineChart;
