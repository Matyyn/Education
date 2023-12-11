import React from "react";
import Search from "../shared/SimpleSearch";
import Arrows from "../../assets/icons/Arrows.svg";
import CoursesDetails from "../admin/CoursesDetails";

const dummyCourses = [
  {
    courseName: "Introduction to Programming",
    courseDescription:
      "Learn the basics of programming with this introductory course.",
  },
  {
    courseName: "Web Development Fundamentals",
    courseDescription:
      "Explore the fundamentals of web development, including HTML, CSS, and JavaScript.",
  },
  {
    courseName: "Data Science Essentials",
    courseDescription:
      "Discover the essential concepts of data science and data analysis.",
  },
  {
    courseName: "Machine Learning Basics",
    courseDescription:
      "Get started with machine learning and understand its basics.",
  },
];

function CoursesCard() {
  return (
    <div className="container max-w-full overflow-hidden shadow-lg rounded-lg">
      <div className="m-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-left rtl:text-right text-black-500 ">
            Courses
          </h2>
          <Search text={"Search Teacher Name"} />
        </div>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-full mx-4">
        {dummyCourses.map((course, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{course.courseName}</span>
                <span className="transition group-open:rotate-180">
                  <img src={Arrows} alt="Down Arrow" />
                </span>
              </summary>
              <CoursesDetails />
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesCard;
