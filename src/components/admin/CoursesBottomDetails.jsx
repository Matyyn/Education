import React, { useState } from "react";
import Button from "../button/Button";
import ReviewsCard from "./Ratings&ReviewsCard";
import Meetings from "./Meetings";
import StarRating from "./RatingsCard";

function App() {
  const [selectedSection, setSelectedSection] = useState("pdf");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const courses = [
    {
      name: "Course1.pdf",
      openColor: "bg-blue-500",
      downloadColor: "bg-green-500",
    },
    {
      name: "Course2.pdf",
      openColor: "bg-blue-500",
      downloadColor: "bg-green-500",
    },
    {
      name: "Course3.pdf",
      openColor: "bg-blue-500",
      downloadColor: "bg-green-500",
    },
    {
      name: "Course4.pdf",
      openColor: "bg-blue-500",
      downloadColor: "bg-green-500",
    },
  ];

  return (
    <div>
      <div className="flex space-x-4 mt-4">
        <div
          className={`px-4 py-2 border rounded cursor-pointer focus:outline-none ${
            selectedSection === "pdf"
              ? "border-b-2 border-turquoise-500"
              : "border"
          }`}
          onClick={() => handleSectionClick("pdf")}
        >
          PDF Files
        </div>
        <div
          className={`px-4 py-2 border rounded cursor-pointer focus:outline-none ${
            selectedSection === "rating"
              ? "border-b-2 border-turquoise-500"
              : "border"
          }`}
          onClick={() => handleSectionClick("rating")}
        >
          Rating & Reviews
        </div>
        <div
          className={`px-4 py-2 border rounded cursor-pointer focus:outline-none ${
            selectedSection === "meetings"
              ? "border-b-2 border-turquoise-500"
              : "border"
          }`}
          onClick={() => handleSectionClick("meetings")}
        >
          Meetings
        </div>
      </div>

      <div
        className={`border-b ${
          selectedSection ? "border-green-500" : "border-gray-300"
        }`}
      ></div>
      {selectedSection === "pdf" && (
        <div className="mt-4 flex flex-wrap">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-1/2 border p-4 mt-2 rounded text-left text-normal "
            >
              {course.name}
              <div className="mt-2 flex space-x-4">
                <Button
                  buttonText="Open"
                  color="teal-600"
                  borderColor="teal-600"
                />
                <Button
                  buttonText="Download"
                  color="teal-600"
                  borderColor="teal-600"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedSection === "rating" && (
        <div className="flex mt-4">
          <div className="w-2/3">
            <ReviewsCard />
          </div>
          <div className="w-1/3">
            <StarRating />
          </div>
        </div>
      )}
      {selectedSection === "meetings" && (
        <div className="flex mt-4">
          <div className="w-full">
            <Meetings />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
