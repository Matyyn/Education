import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import check from "../../../assets/icons/Check.svg";
import close from "../../../assets/icons/Close.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../components/shared/FormsInputField";
import Button from "../../../components/button/Button";
import Plus from "../../../assets/icons/Plused.svg";

const schema = yup.object().shape({
  Datatype: yup
    .string()
    .oneOf(["Select Datatype", "text", "number"])
    .required("Datatype is required"),
  Label: yup.string().required("Label is required"),
});

function App() {
  const [showForm, setShowForm] = useState(false);
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

  const Datatypes = ["Select Datatype", "text", "number"];

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <label className="text-sm block">Label:</label>
          <div>
            <InputField
              placeholder="Label"
              type="text"
              className="w-full rounded-lg px-4 shadow-md text-sm"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="text-sm block">Datatype:</label>
          <div>
            <select
              className="w-full h-10 rounded-lg px-4 shadow-md text-sm"
              placeholder="text"
              disabled
            >
              <option value="text">text</option>
            </select>
          </div>
        </div>

        <div className="flex-1 flex mt-7 flex-row">
          <img src={check} alt="check" className="h-5 w-5 ml-5" />
          <span className="text-sm ml-2 font-semibold text-[#178582]">
            Added
          </span>
          <img src={close} alt="check" className="h-5 w-5 ml-5" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row space-x-4"
      >
        <div className="flex-1">
          <label className="text-sm block">Label:</label>
          <Controller
            name="Label"
            control={control}
            render={({ field }) => (
              <div>
                <InputField
                  {...field}
                  placeholder="Label"
                  type="text"
                  className="w-full rounded-lg px-4 shadow-md text-sm"
                />
                {errors.Label && (
                  <p className="text-red-500 text-sm">{errors.Label.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm block">Datatype:</label>
          <Controller
            name="Datatype"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full h-10 rounded-lg px-4 shadow-md text-sm"
                >
                  {Datatypes.map((Datatype, index) => (
                    <option key={index} value={Datatype}>
                      {Datatype}
                    </option>
                  ))}
                </select>
                {errors.Datatype && (
                  <p className="text-red-500 text-sm">
                    {errors.Datatype.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex-1 mt-5">
          <Button
            buttonText="Assign"
            color="teal-600"
            type="submit"
            icon={Plus}
          />
        </div>
      </form>
      <div className="flex justify-start mt-4 mr-6 gap-2">
        <Button
          buttonText="Add Another"
          color="teal-600"
          borderWidth={1}
          borderColor="white"
          onClick={() => {
            console.log(showForm);
            setShowForm(true);
          }}
        />
      </div>
      <div className="flex justify-end mt-4 mr-6 gap-2">
        <Button
          buttonText="Discard"
          color="teal-600"
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
