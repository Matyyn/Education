import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const schema = yup.object().shape({
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-5">
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

      <div className="flex justify-between mt-4">
        <Button
          buttonText="Cancel"
          textColor={"black"}
          borderColor={"#000"}
          borderWidth={1}
          className="mr-2"
        />
        <Button buttonText="Send Coupon" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
}

export default App;
