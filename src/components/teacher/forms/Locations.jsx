import React, { useState } from "react";
import check from "../../../assets/icons/Check.svg";
import plus from "../../../assets/icons/Plused.svg";
import close from "../../../assets/icons/Close.svg";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../components/shared/FormsInputField";
import Button from "../../../components/button/Button";

const schema = yup.object().shape({
  Locations: yup.string().required("Location is required"),
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm block">Locations:</label>
        <div className="flex-1 flex flex-row space-x-4 mt-4">
          <Controller
            name="Locations"
            control={control}
            render={({ field }) => (
              <div>
                <InputField
                  {...field}
                  placeholder="Locations"
                  type="text"
                  className="w-full rounded-lg px-4 shadow-md text-sm"
                />
                {errors.Locations && (
                  <p className="text-red-500 text-sm">
                    {errors.Locations.message}
                  </p>
                )}
              </div>
            )}
          />
          <img src={check} alt="check" className="h-5 w-5 mt-2" />
          <span className="text-sm ml-2 font-semibold text-[#178582] mt-2">
            Added
          </span>
          <img src={close} alt="close" className="h-5 w-5 ml-5 mt-2" />
        </div>

        <div className="flex items-center mt-4">
          <Button
            buttonText="Add Another"
            textColor={"white"}
            color={"black"}
            borderWidth={1}
            borderColor="black"
            icon={plus}
          />
        </div>
      </form>
      <div className="flex justify-end mt-4 mr-6 gap-2">
        <Button
          buttonText="Discard"
          textColor={"black"}
          borderWidth={1}
          borderColor="black"
        />
        <Button
          buttonText="Save"
          color="teal-600"
          borderWidth={1}
          borderColor="white"
        />
      </div>
    </>
  );
}

export default App;
