import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
  role: yup
    .string()
    .oneOf(["Select Role", "Admin", "Teacher", "User"])
    .required("Role is required"),
  fullName: yup.string().required("Full Name is required"),
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

  const roles = ["Select Role", "Admin", "Teacher", "User"];

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-5">
          <div className="w-full mb-4">
            <label className="text-sm">Role:</label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className="w-full h-10 rounded-lg px-4 shadow-md text-sm"
                  >
                    {roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-sm">
                      {errors.role.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm">Full Name:</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <div>
                  <InputField {...field} placeholder="Full Name" type="text" />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
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
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
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
    </div>
  );
}

export default App;
