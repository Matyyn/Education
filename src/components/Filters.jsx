import React, { useState } from "react";
import SelectInput from "./SelectInput";
import FilterIcon from "../assets/icons/Filter.svg";

export default function Filters() {
  const [filters, setfilters] = useState([
    { name: "indoor", value: "indoor" },
    { name: "outdoor", value: "outdoor" },
  ]);
  return (
    <div className="flex justify-between flex-wrap gap-8">
      <div className="w-[40%] min-w-[250px] flex justify-between">
        <SelectInput
          options={[
            {
              name: "field type",
              value: "",
            },
            ...filters,
            {
              name: "Show All",
              value: "all",
            },
          ]}
        />
        <div className="flex gap-4">
          <label className="main">
            <input type="checkbox" />
            <span className="geekmark border border-gray-300 rounded"></span>
          </label>
          <label className="text-sm">Field Availability</label>
        </div>
      </div>
      <div className="flex gap-3 items-center cursor-pointer">
        <img src={FilterIcon} />
        <p className="font-bold text-sm">Clear Filter</p>
      </div>
    </div>
  );
}
