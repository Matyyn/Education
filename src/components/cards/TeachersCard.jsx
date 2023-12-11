import React from "react";
import Search from "../shared/SimpleSearch";
import Arrows from "../../assets/icons/Arrows.svg";
import CoursesDetails from "../admin/CoursesDetails";
import StudentDetails from "../admin/StudentDetails";
import StudentsMeetings from "../StudentsMeetings";

const dummyCourses = [
  {
    image: "imageURL1",
    teacherName: "Teacher 1",
    courseName: "Course 1",
  },
  {
    image: "imageURL2",
    teacherName: "Teacher 2",
    courseName: "Course 2",
  },
  {
    image: "imageURL3",
    teacherName: "Teacher 3",
    courseName: "Course 3",
  },
  {
    image: "imageURL4",
    teacherName: "Teacher 4",
    courseName: "Course 4",
  },
];

function TeachersCard() {
  return (
    <div className="container max-w-full overflow-hidden shadow-lg rounded-lg">
      <div className="m-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-left rtl:text-right text-black-500 ">
            Teachers
          </h2>
          <Search text="Search Teacher Name" />
        </div>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-full mx-4">
        {dummyCourses.map((teacher, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-start items-center font-medium cursor-pointer list-none">
                <img src={teacher.image} className="rounded-full h-10 w-10" />
                <div className="flex flex-col ml-2">
                  <span>{teacher.teacherName}</span>
                  <span className="text-sm">{teacher.courseName}</span>
                </div>
                <span className="transition group-open:rotate-180 ml-auto">
                  <img src={Arrows} alt="Down Arrow" />
                </span>
              </summary>
              <StudentDetails />
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeachersCard;
