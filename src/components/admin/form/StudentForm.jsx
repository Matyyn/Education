import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .number()
    .typeError("Phone must be a number")
    .required("Phone is required"),
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
      <div className="flex mt-5">
        <div className="w-1/2 pr-4">
          <label className="text-sm">Full Name: </label>
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => (
              <div>
                <InputField {...field} placeholder="First name" type="text" />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm">Email: </label>
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
      <div className="flex mt-5">
        <div className="w-1/2 pr-4">
          <label className="text-sm">Course (Optional): </label>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-[293px] h-10  rounded-lg px-4 shadow-md text-sm justify-start items-center gap-3 inline-flex leading-normal outline-none "
                >
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm">Phone Number: </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <div>
                <InputField {...field} placeholder="Phone" type="number" />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button buttonText="Add Student" color="teal-600" type="submit" />
      </div>
    </form>
  );
}

export default App;
