import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Back from "../../assets/icons/Back.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/shared/FormsInputField";
import Button from "../../components/button/Button";
import ModalButton from "../../components/button/SmallModalButton";
import Check from "../../assets/icons/Check.svg";
import Delete from "../../assets/icons/Trash.svg";
import Pen from "../../assets/icons/Pen.svg";

const schema = yup.object().shape({
  roleName: yup.string().required("Role Name is required"),
  permission: yup.string().required("Permission is required"),
});

const AdminRole = () => {
  const navigate = useNavigate();
  const [checkedTeachers, setCheckedTeachers] = useState({
    teacher1: false,
    teacher2: false,
    teacher3: false,
  });
  const handleCheckboxChange = (event) => {
    setCheckedTeachers({
      ...checkedTeachers,
      [event.target.name]: event.target.checked,
    });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        className="flex items-center space-x-4"
        onClick={() => {
          navigate("/admin/access");
        }}
      >
        <img src={Back} alt="Back" className="h-5 w-5" />

        <h1 className="text-md font-semibold text-black">Create Role</h1>
      </div>
      <div className="bg-[#FFF] w-full h-screen-1/2 p-4 rounded-xl flex">
        <div className="w-2/3 pr-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm block">Role Name:</label>
              <Controller
                name="roleName"
                control={control}
                render={({ field }) => (
                  <div>
                    <InputField
                      {...field}
                      placeholder="Role Name"
                      type="text"
                      className="w-full rounded-lg px-4 shadow-md text-sm"
                    />
                    {errors.roleName && (
                      <p className="text-red-500 text-sm">
                        {errors.roleName.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm block">Permission:</label>
              <Controller
                name="permission"
                control={control}
                render={({ field }) => (
                  <div>
                    <select
                      {...field}
                      className="w-[293px] h-10  rounded-lg px-4 shadow-md text-sm"
                    >
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                    </select>
                    {errors.permission && (
                      <p className="text-red-500 text-sm">
                        {errors.permission.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
            <h2 className="font-semibold">Teacher</h2>
            <div className="flex flex-wrap">
              {Object.keys(checkedTeachers).map((teacher) => (
                <div
                  key={teacher}
                  className="flex items-center space-x-2 mt-4 mr-4"
                >
                  <input
                    type="checkbox"
                    id={teacher}
                    name={teacher}
                    className="hidden"
                    checked={checkedTeachers[teacher]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={teacher} className="cursor-pointer">
                    <span
                      className={`w-5 h-5 inline-block border-2  rounded border-gray-300 mr-2 ${
                        checkedTeachers[teacher] ? "bg-[#0A1828]" : ""
                      }`}
                    >
                      {checkedTeachers[teacher] && (
                        <img src={Check} alt="Checked" className="h-4" />
                      )}
                    </span>
                    {teacher}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-start space-x-4 mt-4">
              <Button
                buttonText="Add"
                color="teal-600"
                borderWidth={1}
                borderColor="white"
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="w-1/3 border-l border-gray-300">
          <div className="flex justify-between items-center m-2">
            <h2 className="font-semibold ml-4">Teacher</h2>
            <div>
              <img src={Pen} alt="Edit" className="inline-block mr-4 h-5 w-5" />
              <img src={Delete} alt="Delete" className="inline-block h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-wrap ml-4">
            {Object.keys(checkedTeachers).map((teacher) => (
              <div
                key={teacher}
                className="flex items-center space-x-2 mt-4 ml-4"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={teacher}
                    name={teacher}
                    className="hidden"
                    checked={checkedTeachers[teacher]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={teacher} className="cursor-pointer">
                    <span
                      className={`w-5 h-5 inline-block border-2  rounded border-gray-300 mr-2 ${
                        checkedTeachers[teacher] ? "bg-[#0A1828]" : ""
                      }`}
                    >
                      {checkedTeachers[teacher] && (
                        <img src={Check} alt="Checked" className="h-4" />
                      )}
                    </span>
                    {teacher}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 ml-6   mt-40">
            <Button buttonText="Discard" color="teal-600" />
            <ModalButton buttonText="Create Role" color="teal-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRole;
