import React from "react";
import Arrows from "../assets/icons/Arrows.svg";
import FacetoFaceAccordian from "../components/admin/FacetoFaceAccordian";

const dummyCourses = [
  {
    courseName: "Live Meeting",
    courseDescription:
      "Learn the basics of programming with this introductory course.",
  },
  {
    courseName: "Face To Face",
    courseDescription:
      "Explore the fundamentals of web development, including HTML, CSS, and JavaScript.",
  },
];

function CardWithAccordions() {
  return (
    <div className="max-w-full mt-4">
      <div className="flex flex-wrap">
        <div className="w-1/2 px-2 mb-4">
          <div className="max-h-80 overflow-auto bg-[#fff] p-4">
            <h1 className="text-md font-semibold mb-4 ">
              Subscribed Materials 4
            </h1>
            <span className="mr-2 text-sm">16 Videos 16 PDFs</span>
            <hr />
            <div className="rounded bg-gray-100 mb-4 p-2 mt-2">
              <h2 className="text-md font-semibold">Summary 1</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
            <div className="rounded bg-gray-100 mb-4 p-2">
              <h2 className="text-md font-semibold">Section 1</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
            <div className="rounded bg-gray-100 mb-2 p-2">
              <h2 className="text-md font-semibold">Section 2</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
            <div className="rounded bg-gray-100 mb-4 p-2">
              <h2 className="text-md font-semibold">Section 3</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
            <div className="rounded bg-gray-100 mb-4 p-2">
              <h2 className="text-md font-semibold">Section 3</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
            <div className="rounded bg-gray-100 mb-4 p-2">
              <h2 className="text-md font-semibold">Section 3</h2>
              <div className="flex justify-left">
                <span className="mr-2 text-sm">Videos: 4</span>
                <span className="text-sm">PDFs: 4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg">
            <div className="px-4 py-3 border-b">
              <h1 className="text-md font-semibold mb-5">Meetings</h1>
            </div>
            <hr />
            <div className="px-4 py-2 ">
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
  );
}

export default CardWithAccordions;
