import React, { useState } from "react";
import Button from "../../button/Button";
import smallArrowleft from "../../../assets/icons/SmallArrowleft.svg";

import smallArrowRight from "../../../assets/icons/SmallArrowRight.svg";
function VideoComponent() {
  return (
    <div className="w-full max-h-120 flex items-center justify-left mt-2">
      <div className="w-3/5 bg-white rounded-lg shadow-md p-4  mr-2 flex flex-col">
        <div className="relative aspect-w-16 aspect-h-9 mb-2">
          <iframe
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/jLpUPFoOny8"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-between mt-2">
          <Button
            buttonText="Previous"
            icon={smallArrowleft}
            textColor={"black"}
            borderColor={"#000"}
            borderWidth={1}
            className="mr-2"
          />
          <Button
            buttonText="Next"
            icon={smallArrowRight}
            textColor={"black"}
            borderColor={"#000"}
            borderWidth={1}
            className="mr-2"
          />
        </div>
      </div>
      <div className="w-2/5 bg-white rounded-lg shadow-md py-6 px-2 ">
        <div className="max-h-96 overflow-auto ">
          <h1 className="text-md font-semibold mb-4 ">Upcoming Videos</h1>
          <div className="rounded bg-gray-100 mb-4 p-2">
            <h2 className="text-md font-semibold">Summary 1</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
          <div className="rounded bg-gray-100 mb-4 p-2">
            <h2 className="text-md font-semibold">Section 1</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
          <div className="rounded bg-gray-100 mb-2 p-2">
            <h2 className="text-md font-semibold">Section 2</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
          <div className="rounded bg-gray-100 mb-4 p-2">
            <h2 className="text-md font-semibold">Section 3</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
          <div className="rounded bg-gray-100 mb-4 p-2">
            <h2 className="text-md font-semibold">Section 3</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
          <div className="rounded bg-gray-100 mb-4 p-2">
            <h2 className="text-md font-semibold">Section 3</h2>
            <div className="flex justify-left">
              <span className="mr-2 text-sm">Videos: 4</span>
              <span className="text-sm">PDFs: 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
