import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Delete from "../../../assets/icons/Trash.svg";
import Button from "../../button/Button";

const schema = yup.object().shape({
  websiteName: yup.string().required(),
  websiteDescription: yup.string().required(),
});

const EditSettingsCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row w-full justify-between bg-white shadow-lg p-6"
    >
      <div className="flex flex-col w-2/5">
        <label className="text-bold text-md" htmlFor="websiteName">
          Website Name
        </label>
        <input
          {...register("websiteName")}
          id="websiteName"
          className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Website Name"
        />
        <p>{errors.websiteName?.message}</p>

        <label className="text-bold text-md mt-3" htmlFor="websiteDescription">
          Website Description
        </label>
        <textarea
          {...register("websiteDescription")}
          id="websiteDescription"
          className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Hello, this is an education project"
        />
        <p>{errors.websiteDescription?.message}</p>
      </div>
      <div className="flex w-2/5 flex-col justify-end">
        <label className="text-black">App Logo</label>
        <div className="flex flex-col bg-teal-600 items-center justify-center rounded-md">
          <div
            className="flex flex-col bg-white items-end justify-end rounded-full p-2 m-4 mb-0 "
            style={{ marginLeft: "auto" }}
          >
            <img src={Delete} alt="Delete" className="h-6 w-6" />
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2F2.png?alt=media&token=57be424f-357f-4730-8e50-ebdee240a5e8"
            alt="image"
            className="h-40 w-40 p-5"
          />
        </div>
        <div className="flex justify-end mt-2 gap-2">
          <Button
            buttonText="Discard"
            textColor="black"
            borderWidth={1}
            borderColor="black"
          />
          <Button
            type="submit"
            buttonText="Save"
            color="teal-600"
            borderWidth={1}
            borderColor="white"
          />
        </div>
      </div>
    </form>
  );
};

export default EditSettingsCard;
