import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "../../shared/FormsInputField";
import Button from "../../button/Button";

const UploadFileForm = () => {
  const validationSchema = Yup.object().shape({
    nameOfFile: Yup.string().required("Name of File is required"),
    course: Yup.string().required("Course is required"),
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
    description: Yup.string().max(
      600,
      "Description must be 600 characters or less",
    ),
    fileIcon: Yup.mixed().test(
      "fileIconType",
      "Only PNG, JPG, or SVG files are allowed",
      (value) => {
        if (value) {
          return ["image/png", "image/jpeg", "image/svg+xml"].includes(
            value[0].type,
          );
        }
        return true;
      },
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [descriptionLength, setDescriptionLength] = useState(0);

  const onDescriptionChange = (event) => {
    setDescriptionLength(event.target.value.length);
  };

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
              className="block text-sm font-medium text-gray-700 mt-1"
            >
              Name of File
            </label>
            <InputField
              {...register("nameOfFile")}
              type="text"
              id="nameOfFile"
              name="nameOfFile"
              placeholder="Course Name"
            />
            <p className="text-red-600">{errors.nameOfFile?.message}</p>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mt-5"
            >
              Description ({descriptionLength}/600)
            </label>
            <div className="w-[293px] h-40 rounded-lg px-4 px-4 shadow-md justify-start items-center gap-3 inline-flex mt-2">
              <textarea
                {...register("description")}
                id="description"
                name="description"
                className="w-full rounded-lg h-full bg-#F9F9F9 relative text-left text-black text-sm font-normal font-['Inter'] leading-normal outline-none"
                placeholder="Description"
                onChange={onDescriptionChange}
              />
            </div>
            <p className="text-red-600">{errors.description?.message}</p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Video/PDF
            </label>
            <input
              {...register("file")}
              type="file"
              id="file"
              name="file"
              className="block w-full mt-1 p-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-35"
            />
            <p className="text-red-600">{errors.file?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="fileIcon"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Icon (PNG, JPG, or SVG)
            </label>
            <input
              {...register("fileIcon")}
              type="file"
              id="fileIcon"
              name="fileIcon"
              className="block w-full mt-1 p-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-35"
            />
            <p className="text-red-600">{errors.fileIcon?.message}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button buttonText="Upload" color="teal-600" type="submit" />
      </div>
    </form>
  );
};

export default UploadFileForm;
