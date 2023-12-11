import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
  course: yup
    .string()
    .oneOf([
      "Select Course",
      "Geology",
      "History",
      "Computer Science",
      "Maths",
      "Physics",
    ])
    .required("Course is required"),
  teacherName: yup.string().required("Teacher Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
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

  const courses = [
    "Select Course",
    "Geology",
    "History",
    "Computer Science",
    "Maths",
    "Physics",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-5">
        <div className="w-full mb-4">
          <label className="text-sm">Course:</label>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm"
                >
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="text-red-500 text-sm">
                    {errors.course.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-full mb-4">
          <label className="text-sm">Teacher Name:</label>
          <Controller
            name="teacherName"
            control={control}
            render={({ field }) => (
              <div>
                <InputField {...field} placeholder="Teacher Name" type="text" />
                {errors.teacherName && (
                  <p className="text-red-500 text-sm">
                    {errors.teacherName.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <label className="text-sm">Email:</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <InputField {...field} placeholder="Email" type="email" />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button buttonText="Assign" color="teal-600" type="submit" />
      </div>
    </form>
  );
}

export default App;
