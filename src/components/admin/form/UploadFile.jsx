import React from "react";
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
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Course
            </label>
            <select
              {...register("course")}
              id="course"
              name="course"
              className="block w-full mt-1 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
            </select>
            <p className="text-red-600">{errors.course?.message}</p>
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
      <div className="flex justify-end mt-4">
        <Button buttonText="Upload" color="teal-600" type="submit" />
      </div>
    </form>
  );
};

export default UploadFileForm;
