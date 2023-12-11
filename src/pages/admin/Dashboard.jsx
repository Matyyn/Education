import React, { useState } from "react";
import SimpleAreaChart from "../../components/admin/LineChart";
import Chart from "react-apexcharts";
import Close from "../../assets/icons/Close.svg";
import BarChart from "../../components/admin/BarChart";
import Accordion from "../../components/admin/AdminAccordian";
import PieChart from "../../components/teacher/PieChart";
import Button from "../../components/button/Button";
import InputField from "../../components/shared/FormsInputField";

const Dashboard = () => {
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
      colors: ["#3E97FF"],
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

  const courses = [
    {
      image: "path-to-image-1",
      name: "Course Name 1",
      teacher: "Teacher Name 1",
      price: "Price 1",
    },
    {
      image: "path-to-image-1",
      name: "Course Name 1",
      teacher: "Teacher Name 1",
      price: "Price 1",
    },
    {
      image: "path-to-image-1",
      name: "Course Name 1",
      teacher: "Teacher Name 1",
      price: "Price 1",
    },
  ];
  const [link, setLink] = useState("");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };
  const handleSend = () => {};
  const [isDivVisible, setIsDivVisible] = useState(true);

  const handleCloseClick = () => {
    setIsDivVisible(false);
  };

  return (
    <>
      {isDivVisible && (
        <div className="bg-[#7367F01F] p-3 mb-2 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-teal-600">Live Meeting</h3>
            <img
              src={Close}
              onClick={handleCloseClick}
              style={{ cursor: "pointer" }}
              className="h-4 w-4 mr-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <p className="text-teal-600">Meeting link </p>
            <p className="text-black">
              will be sent to the subscribed students at 12:30 pm.
            </p>
          </div>
          <h3 className="font-semibold text-[#5E6278]">Enter Link</h3>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <InputField
              type={"text"}
              placeholder="Enter meeting Link"
              className="w-full sm:w-auto"
            />
            <Button
              buttonText="Send"
              color={"teal-600"}
              onClick={handleSend}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-around mt-2">
        <SimpleAreaChart option="1" />
        <SimpleAreaChart option="2" />
        <SimpleAreaChart option="3" />
        <SimpleAreaChart option="4" />
      </div>

      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-4 bg-white p-2 mt-2">
        <div className="w-full sm:w-full md:w-full lg:w-3/5 mx-auto mt-2 border border-gray-200 rounded-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-2">Top Selling Courses</h2>
          <p className="text-md">Number of Students</p>
          <BarChart />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-2/5 mx-auto mt-2 border border-gray-200 rounded-lg p-4 bg-white ">
          <h2 className="text-xl font-bold mb-2">Top Courses</h2>
          <p className="text-md mb-2">By Teacher</p>
          <div className="chart">
            <Chart options={options} series={series} type="area" height={145} />
          </div>
          {courses.map((course, index) => (
            <div key={index} className="mb-4 mt-4 bg-white">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={course.image}
                    className="w-10 h-10 mr-2 rounded-full"
                  />
                  <div>
                    <p className="text-sm">{course.name}</p>
                    <p className="text-sm">{course.teacher}</p>
                  </div>
                </div>
                <p className="bg-gray-200 text-sm p-1 rounded">
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          "bg-white py-5 mb-10 rounded-xl flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 p-2"
        }
      >
        <div className="lg:w-3/5 md:full sm:w-full mb-5 sm:mb-0">
          <Accordion />
        </div>

        <div className="lg:w-2/5 md:full sm:w-full border rounded-lg">
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
