import React from "react";
import Button from "../button/ModalButton";
import VideoComponent from "./video/Video";
import CoursesBottom from "./CoursesBottomDetails";
function CoursesDetails() {
  return (
    <div>
      <div className="flex justify-end">
        <Button buttonText="Upload" color="teal-600" />
        <Button buttonText="Meetings" color="teal-600" />
      </div>
      <VideoComponent />
      <CoursesBottom className="mt-10" />
    </div>
  );
}

export default CoursesDetails;
