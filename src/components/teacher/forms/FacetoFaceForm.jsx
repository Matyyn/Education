import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormsInput from "../../shared/FormsInputField";
import Button from "../../button/Button";
import PlusSquared from "../../../assets/icons/Plused.svg";

function LiveMeetingForm() {
  const validationSchema = Yup.object().shape({
    groupPrice: Yup.number().typeError("Must be a number").required("Required"),
    privatePrice: Yup.number()
      .typeError("Must be a number")
      .required("Required"),
    date: Yup.date().typeError("Invalid date format").required("Required"),
    time: Yup.string()
      .matches(/^([01]\d|2[0-3]):[0-5]\d$/, "Invalid time format")
      .required("Required"),
    location: Yup.string().required("Required"),
  });

  const locationOptions = ["Location 1", "Location 2", "Location 3"];

  const { control, handleSubmit, formState, setError } = useForm({
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
      <h2 className="text-md font-semibold mb-4">Pricing</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="groupPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Group Price KWD
          </label>
          <Controller
            name="groupPrice"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="groupPrice"
                  name="groupPrice"
                  placeholder="Group Price"
                  type="number"
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
            htmlFor="privatePrice"
            className="block text-sm font-medium text-gray-700"
          >
            Private Price KWD
          </label>
          <Controller
            name="privatePrice"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="privatePrice"
                  name="privatePrice"
                  placeholder="Private Price"
                  type="number"
                  {...field}
                />
                {fieldState.error ? (
                  <div className="text-red-600">{fieldState.error.message}</div>
                ) : null}
              </div>
            )}
          />
        </div>
      </div>
      <h2 className="text-md font-semibold mb-4">Schedule</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <Controller
            name="date"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="date"
                  name="date"
                  placeholder="Date"
                  type="date"
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
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Start-End
          </label>
          <Controller
            name="time"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <FormsInput
                  id="time"
                  name="time"
                  placeholder="Time"
                  type="time"
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
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <Controller
            name="location"
            control={control}
            render={({ field, fieldState }) => (
              <select
                {...field}
                className="block w-full mt-1 py-1 border-2 border-gray-300 rounded-md focus:ring-teal-600 focus:border-teal-600"
              >
                {locationOptions.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            )}
          />
          {formState.errors.location && (
            <div className="text-red-600">
              {formState.errors.location.message}
            </div>
          )}
        </div>
      </div>
      <div className="text-right mt-4">
        <Button
          buttonText="Add"
          color="teal-600"
          type="submit"
          icon={PlusSquared}
        />
      </div>
      <div className="flex justify-end mt-4 gap-3">
        <Button
          buttonText="Cancel"
          textColor={"black"}
          borderColor={"#000"}
          borderWidth={1}
          className="mr-2"
        />
        <Button buttonText="Save" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
}

export default LiveMeetingForm;
