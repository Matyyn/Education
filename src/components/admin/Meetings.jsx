import React from "react";
import Arrows from "../../assets/icons/Arrows.svg";
import FacetoFaceAccordian from "./FacetoFaceAccordian";
import GroupAccordian from "./GroupAccordian";
const dummyCourses = [
  {
    courseName: "Group",
    courseDescription:
      "Learn the basics of programming with this introductory course.",
  },
  {
    courseName: "Private",
    courseDescription:
      "Explore the fundamentals of web development, including HTML, CSS, and JavaScript.",
  },
];

function CardWithAccordions() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-1/2 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg">
            <div className="px-4 py-3 border-b">
              <h1 className="text-md font-semibold">Live Meeting</h1>
            </div>
            <div className="p-4">
              <div className="divide-y divide-gray-200">
                {dummyCourses.map((course, index) => (
                  <div key={index} className="py-2">
                    <details className="group">
                      <summary className="flex justify-between items-center font-normal cursor-pointer list-none text-sm">
                        <span>{course.courseName}</span>
                        <span className="transition group-open:rotate-180">
                          <img src={Arrows} alt="Down Arrow" />
                        </span>
                      </summary>
                      <GroupAccordian />
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg">
            <div className="px-4 py-3 border-b">
              <h1 className="text-md font-semibold">Face to Face</h1>
            </div>
            <div className="p-4">
              <div className="divide-y divide-gray-200">
                {dummyCourses.map((course, index) => (
                  <div key={index} className="py-2">
                    <details className="group">
                      <summary className="flex justify-between items-center font-normal cursor-pointer list-none text-sm">
                        <span>{course.courseName}</span>
                        <span className="transition group-open:rotate-180">
                          <img src={Arrows} alt="Down Arrow" />
                        </span>
                      </summary>
                      <FacetoFaceAccordian />
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithAccordions;
