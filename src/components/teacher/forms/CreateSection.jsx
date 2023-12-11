import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormsInput from "../../shared/FormsInputField";
import Button from "../../button/Button";

function CreateSectionForm() {
  const validationSchema = Yup.object().shape({
    sectionName: Yup.string().required("Required"),
    sectionPrice: Yup.number()
      .typeError("Must be a number")
      .required("Required"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl w-full bg-white shadow-lg rounded-md p-4"
    >
      <h2 className="text-md font-semibold mb-4">New Section</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="sectionName"
            className="block text-sm font-medium text-gray-700"
          >
            Section Name
          </label>
          <Controller
            name="sectionName"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="sectionName"
                  name="sectionName"
                  placeholder="Section Name"
                  {...field}
                />
                {fieldState.error ? (
                  <div className="text-red-600">{fieldState.error.message}</div>
                ) : null}
              </div>
            )}
          />
        </div>
        <div>
          <label
            htmlFor="sectionPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Section Price KWD
          </label>
          <Controller
            name="sectionPrice"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="sectionPrice"
                  name="sectionPrice"
                  placeholder="Section Price"
                  type="number"
                  {...field}
                />
                {fieldState.error ? (
                  <div className="text-red-600">{fieldState.error.message}</div>
                ) : null}
                <div className="text-red-600">
                  30% of this amount will be deducted
                </div>
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
        <Button buttonText="Create" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
}

export default CreateSectionForm;
