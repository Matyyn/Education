import Button from "../../components/button/Button";
import BackgroundImage from "../../components/cards/BackgroundImage";
import List from "../../components/admin/List";

const ScreenWithBackground = () => {
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
    courseName: "Physics 101",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8",
    description:
      "Physics 101 is an introductory course that covers the fundamental principles of physics, including mechanics, electromagnetism, and thermodynamics.",
    teachingCountriesCount: 8,
    numberOfTeachers: 2,
    numberOfStudents: 75,
  };

  return (
    <div className="flex flex-col mb-5">
      <BackgroundImage Course={Course} />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-6">
        <List
          teachers={teachersData}
          className="flex-1 w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0 lg:mb-0 md:mr-2 lg:mr-2"
          Title="Teachers"
        />
        <List
          teachers={teachersData}
          className="flex-1 w-full md:w-1/2 lg:w-1/2"
          Title="Students"
        />
      </div>
    </div>
  );
};

export default ScreenWithBackground;
