import React from "react";
import RightArrow from "../../assets/icons/RightArrow.svg";
import ModalButton from "../../components/button/SmallModalButton";
const courses = [
  {
    id: 1,
    name: "Course 1",
    image: "image1.jpg",
  },
  {
    id: 2,
    name: "Course 2",
    image: "image2.jpg",
  },
];

function CourseCard({ name, image }) {
  return (
    <div className="flex flex-col max-w-full w-full mx-auto bg-white p-4 mb-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            className="object-cover w-6 h-6 border-2 border-white rounded-full mr-2"
            src={image}
          />
          <div className="text-md font-semibold">{name}</div>
        </div>
        <div className="font-bold mr-4 justify-center items-center">
          <ModalButton
            icon={RightArrow}
            buttonText={"Join Course"}
            textColor={"black"}
            color="#F1F1F2"
          />
          {/* <p className="mt-4 bg-[#F1F1F2] rounded p-2">
            <img src={RightArrow} className="h-4 w-4" />
          </p>           */}
        </div>
      </div>
      <hr className="border-black border-t-1 mt-4 border-dotted" />
    </div>
  );
}

function CourseAccordion() {
  return (
    <div className="max-w-full mx-auto">
      {courses.map((course, index) => (
        <CourseCard key={course.id} name={course.name} image={course.image} />
      ))}
    </div>
  );
}

export default CourseAccordion;
