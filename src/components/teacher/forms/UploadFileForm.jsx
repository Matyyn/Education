import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Plus from "../../../assets/icons/WhitePlus.svg";
import * as Yup from "yup";
import ModalButton from "../../button/ModalButton";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const UploadFileForm = () => {
  const validationSchema = Yup.object().shape({
    nameOfFile: Yup.string().required("Name of File is required"),
    section: Yup.string().required("Section is required"),
    file: Yup.mixed()
      .test("fileType", "Only PDF or video files are allowed", (value) => {
        if (value) {
          return (
            value[0].type === "application/pdf" ||
            value[0].type.startsWith("video/")
          );
        }
        return false;
      })
      .required("File is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onFileUpload = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onFileUpload)}
      className="max-w-3xl w-full bg-white shadow-lg rounded-md p-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div>
            <label
              htmlFor="nameOfFile"
              className="block text-sm font-medium text-gray-700"
            >
              Name of File
            </label>
            <InputField
              {...register("nameOfFile")}
              type="text"
              id="nameOfFile"
              name="nameOfFile"
              placeholder="File Name"
            />
            <p className="text-red-600">{errors.nameOfFile?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700"
            >
              Section
            </label>
            <div className="flex justify-between gap-2">
              <select
                {...register("section")}
                id="section"
                name="section"
                className="block w-full py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a section</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
              </select>
              <ModalButton
                buttonText="Create"
                textColor={"black"}
                borderColor={"#000"}
                borderWidth={2}
                icon={Plus}
              />
            </div>
            <Button
              buttonText="Add Another"
              textColor={"black"}
              borderColor={"#000"}
              borderWidth={1}
              icon={Plus}
              className="mt-5"
            />
            <p className="text-red-600">{errors.section?.message}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Video/PDF
          </label>
          <div className="mb-4 border-dotted border-2 border-black rounded">
            <input
              {...register("file")}
              type="file"
              id="file"
              name="file"
              className="block w-full mt-1 p-20 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-20"
            />
            <p className="text-red-600">{errors.file?.message}</p>
          </div>
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
        <Button buttonText="Upload" color={"teal-600"} type="submit" />
      </div>
    </form>
  );
};

export default UploadFileForm;
