import BackgroundImage from "../../components/cards/TeachersBackgroundImage";

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
    </div>
  );
};

export default ScreenWithBackground;
