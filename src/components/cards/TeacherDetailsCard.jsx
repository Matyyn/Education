import React from "react";
function TeacherDetailsCard({ teacherDetails }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-lg">
      <div className="px-6 py-4">
        <img
          className="w-25 rounded-full h-25 mx-auto mb-4"
          src="data:image/jpeg;base64,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"
        />
        <div className="font-bold text-center text-md mb-2">
          The Coldest Sunset
        </div>
        <div className="text-center text-sm mb-2">email@gmail.com</div>
        <div className="text-center text-sm mb-2">+920000000000</div>
        <div className="flex justify-center mb-2">
          <div className="px-3 py-1 text-sm font-normal rounded-full text-center text-emerald-500 bg-emerald-100/60 ">
            Active
          </div>
        </div>
        <div className="border-t mt-4 border-gray-300"></div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">Country</div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">Date Joined</div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">Total Courses</div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">
            Total Material Uploaded
          </div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">Locations</div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-left text-sm mb-2">Rating</div>
          <div className="text-right text-sm mb-2">Country</div>
        </div>
        <div className="border-t mt-4 border-gray-300"></div>
        <div className="mt-4">
          <div className="flex justify-between">
            <text>
              <span className="font-bold text-left text-lg ">12,356.00</span>
              <span className="text-left text-sm ml-2 ">KWD</span>
            </text>
            <div className="px-3 py-2 text-sm font-bold rounded-full text-center text-emerald-500 bg-emerald-100/60 ">
              Active
            </div>
          </div>
          <div className="text-left text-sm">Revenue Generated</div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetailsCard;
