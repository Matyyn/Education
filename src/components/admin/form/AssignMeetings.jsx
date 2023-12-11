import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
  courseName: yup.string().required("Course name is required"),
  teacherName: yup.string().required("Teacher name is required"),
  meetingType: yup.string().required("Meeting type is required"),
  type: yup.string().required("Type is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
  availabilityTimes: yup.string().required("Availability times are required"),
});

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const courseNames = [
    "Select Course",
    "Geology",
    "History",
    "Computer Science",
    "Maths",
    "Physics",
  ];
  const teacherNames = [
    "Select Teacher",
    "Teacher 1",
    "Teacher 2",
    "Teacher 3",
  ];
  const meetingTypes = ["Select Meeting Type", "Type 1", "Type 2", "Type 3"];
  const types = ["Select Type", "Type A", "Type B", "Type C"];
  const availabilityTimes = [
    "Select Availability Time",
    "Time 1",
    "Time 2",
    "Time 3",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mt-5">
        <div className="w-1/2 pr-4">
          <label className="text-sm">Course Name: </label>
          <Controller
            name="courseName"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {courseNames.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                {errors.courseName && (
                  <p className="text-red-500 text-sm">
                    {errors.courseName.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm">Teacher Name: </label>
          <Controller
            name="teacherName"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {teacherNames.map((teacher, index) => (
                    <option key={index} value={teacher}>
                      {teacher}
                    </option>
                  ))}
                </select>
                {errors.teacherName && (
                  <p className="text-red-500 text-sm">
                    {errors.teacherName.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex mt-5">
        <div className="w-1/2 pr-4">
          <label className="text-sm">Meeting Type: </label>
          <Controller
            name="meetingType"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {meetingTypes.map((meetingType, index) => (
                    <option key={index} value={meetingType}>
                      {meetingType}
                    </option>
                  ))}
                </select>
                {errors.meetingType && (
                  <p className="text-red-500 text-sm">
                    {errors.meetingType.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm">Type: </label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {types.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex mt-5">
        <div className="w-1/2 pr-4">
          <label className="text-sm">Price: </label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <div>
                <InputField {...field} placeholder="Price" type="number" />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm">Availability Times: </label>
          <Controller
            name="availabilityTimes"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {availabilityTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.availabilityTimes && (
                  <p className="text-red-500 text-sm">
                    {errors.availabilityTimes.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 gap-3">
        <Button
          buttonText="Cancel"
          textColor={"black"}
          borderColor={"#000"}
          borderWidth={1}
          className="mr-2"
        />
        <Button buttonText="Assign" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
}

export default App;
