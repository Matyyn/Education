import BackgroundImage from "../../components/cards/TeachersBackgroundImage";
import VideoComponent from "../../components/teacher/video/Video";
import { useNavigate } from "react-router-dom";
import BottomCourseDetails from "../../components/teacher/BottomDetails";
import Back from "../../assets/icons/Back.svg";
import Pen from "../../assets/icons/Pen.svg";
const ScreenWithBackground = () => {
  const navigate = useNavigate();
  const teachersData = [
    {
      name: "John Doe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
      price: "12,250 KWD",
      country: "USA",
    },
    {
      name: "Jane Smith",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
      price: "12,250 KWD",
      country: "Canada",
    },
    {
      name: "Jane Smith",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
      price: "12,250 KWD",
      country: "Canada",
    },
    {
      name: "Jane Smith",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
      price: "12,250 KWD",
      country: "Canada",
    },
  ];
  const Course = {
    courseName: "Physics",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
    description:
      "Physics 101 is an introductory course that covers the fundamental principles of physics, including mechanics, electromagnetism, and thermodynamics.",
    pdfFiles: 8,
    videos: 2,
    numberOfStudents: 75,
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div
          className="flex items-center space-x-4"
          onClick={() => {
            navigate("/teacher/courses");
          }}
        >
          <img src={Back} alt="Back" className="h-5 w-5" />

          <h1 className="text-md font-semibold text-teal-600">
            Course Details
          </h1>
        </div>

        <button
          className="bg-transparent flex items-center mr-2"
          onClick={() => {}}
        >
          <img
            src={Pen}
            alt="Edit"
            className="h-5 w-5 cursor-pointer text-teal-600 mr-2"
          />
          <span className="text-md font-semibold text-teal-600">Edit</span>
        </button>
      </div>
      <div className="flex flex-col mb-5 p-5 bg-white rounded-lg">
        <BackgroundImage Course={Course} />
        <VideoComponent />
        <BottomCourseDetails />
      </div>
    </>
  );
};

export default ScreenWithBackground;
