import React from "react";
import Search from "../../components/shared/Search";
import Button from "../../components/button/ModalButton";
import Table from "../../components/table/Table";

import Plus from "../../assets/icons/Plused.svg";

const Teachers = () => {
  const teachersData = [
    {
      id: 1,
      name: "John Doe",
      country: "United States",
      courses: [
        {
          courseName: "Mathematics",
          materials: 10,
          liveMeeting: 3,
          faceToFace: 0,
          image: "mathematics-image-url.jpg",
        },
        {
          courseName: "Science",
          materials: 8,
          liveMeeting: 2,
          faceToFace: 0,
          image: "science-image-url.jpg",
        },
      ],
      status: "Active",
      students: [
        {
          avatar: "student1-avatar-url.jpg",
        },
        {
          avatar: "student2-avatar-url.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      country: "Canada",
      courses: [
        {
          courseName: "History",
          materials: 5,
          liveMeeting: 4,
          faceToFace: 2,
          image: "history-image-url.jpg",
        },
        {
          courseName: "English",
          materials: 7,
          liveMeeting: 3,
          faceToFace: 0,
          image: "english-image-url.jpg",
        },
      ],
      status: "Deactivated",
      students: [
        {
          avatar: "student3-avatar-url.jpg",
        },
        {
          avatar: "student4-avatar-url.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Bob Johnson",
      country: "United Kingdom",
      courses: [
        {
          courseName: "Chemistry",
          materials: 9,
          liveMeeting: 3,
          faceToFace: 1,
          image: "chemistry-image-url.jpg",
        },
        {
          courseName: "Physics",
          materials: 6,
          liveMeeting: 2,
          faceToFace: 3,
          image: "physics-image-url.jpg",
        },
      ],
      status: "Active",
      students: [
        {
          avatar: "student5-avatar-url.jpg",
        },
        {
          avatar: "student6-avatar-url.jpg",
        },
      ],
    },
  ];

  return (
    <div className=" bg-[#FFF] w-full h-full p-4 rounded-xl ">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
        <Search text={"Search Teacher Name"} />
        <Button buttonText="Add New Teacher" color="teal-600" icon={Plus} />
      </div>
      <Table teachersData={teachersData} />
    </div>
  );
};

export default Teachers;
