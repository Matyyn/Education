import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../components/shared/FormsInputField";
import Button from "../../../components/button/Button";
import Plus from "../../../assets/icons/Plused.svg";

const schema = yup.object().shape({
  CouponID: yup.string().required("Coupon ID is required"),
  DiscountPercentage: yup
    .number()
    .typeError("Discount Percentage must be a number")
    .required("Discount Percentage is required"),
  ValidTillDate: yup.date().required("Valid Till Date is required"),
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm block">Coupon ID:</label>
        <Controller
          name="CouponID"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                {...field}
                placeholder="Coupon ID"
                type="text"
                className="w-full rounded-lg px-4 shadow-md text-sm"
              />
              {errors.CouponID && (
                <p className="text-red-500 text-sm">
                  {errors.CouponID.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm block">Discount Percentage:</label>
        <Controller
          name="DiscountPercentage"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                {...field}
                placeholder="Discount Percentage"
                type="number"
                className="w-full rounded-lg px-4 shadow-md text-sm"
              />
              {errors.DiscountPercentage && (
                <p className="text-red-500 text-sm">
                  {errors.DiscountPercentage.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm block">Valid Till Date:</label>
        <Controller
          name="ValidTillDate"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                {...field}
                placeholder="Valid Till Date"
                type="date"
                className="w-full rounded-lg px-4 shadow-md text-sm"
              />
              {errors.ValidTillDate && (
                <p className="text-red-500 text-sm">
                  {errors.ValidTillDate.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <Button buttonText="Discard" color="teal-600" />
        <Button
          buttonText="Save"
          color="teal-600"
          borderWidth={1}
          borderColor="white"
          type="submit"
        />
      </div>
    </form>
  );
}

export default App;
