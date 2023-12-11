import React from "react";
import Search from "../../components/shared/Search";
import Plus from "../../assets/icons/Plused.svg";
import Button from "../../components/button/ModalButton";
import Table from "../../components/table/CourseTable";

const Teachers = () => {
  const teachersData = [
    {
      id: 1,
      courseName: {
        Name: "Mathematics",
        image: "mathematics-image-url.jpg",
      },
      studentsRegistered: [
        {
          fullName: "Mathematics",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
      courseStatus: "Active",
      teacherName: [
        {
          fullName: "John",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
    },
    {
      id: 2,
      courseName: {
        Name: "Mathematics",
        image: "mathematics-image-url.jpg",
      },
      studentsRegistered: [
        {
          fullName: "Mathematics",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
      courseStatus: "Active",
      teacherName: [
        {
          fullName: "John",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
    },
    {
      id: 3,
      courseName: {
        Name: "Mathematics",
        image: "mathematics-image-url.jpg",
      },
      studentsRegistered: [
        {
          fullName: "Mathematics",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
      courseStatus: "Active",
      teacherName: [
        {
          fullName: "John",
          image: "mathematics-image-url.jpg",
        },
        {
          fullName: "Science",
          image: "science-image-url.jpg",
        },
      ],
    },
  ];

  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex flex-col sm:flex-col md:flex-row  lg:flex-row  xl:flex-row justify-between">
        <Search text={"Search Course Name"} className="mb-4 md:mb-0" />
        <Button
          buttonText="Add New Course"
          color="teal-600"
          icon={Plus}
          className="mt-1"
        />
      </div>
      <Table teachersData={teachersData} />
    </div>
  );
};

export default Teachers;
