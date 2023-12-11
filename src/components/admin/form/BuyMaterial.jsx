import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
  courseName: yup.string().required("Course name is required"),
  teacherName: yup.string().required("Teacher name is required"),
  material: yup.string().required("Material is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
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
  const teachers = ["Select Teacher", "Teacher 1", "Teacher 2", "Teacher 3"];
  const materials = [
    "Select Material",
    "Material 1",
    "Material 2",
    "Material 3",
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
                  {courses.map((course, index) => (
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
                  {teachers.map((teacher, index) => (
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
          <label className="text-sm">Material: </label>
          <Controller
            name="material"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none"
                >
                  {materials.map((material, index) => (
                    <option key={index} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
                {errors.material && (
                  <p className="text-red-500 text-sm">
                    {errors.material.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
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
      </div>
      <div className="flex justify-end mt-4 gap-3">
        <Button
          buttonText="Cancel"
          textColor={"black"}
          borderColor={"#000"}
          borderWidth={1}
          className="mr-2"
        />
        <Button buttonText="Buy" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
}

export default App;
