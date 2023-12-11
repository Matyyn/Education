import React from "react";
const MessagingScreen = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/6 bg-[#FFF] py-4 pl-2">
        <div className="flex items-center justify-between mb-4">
          <img
            className="rounded-full w-10 h-10 mr-10"
            src="path-to-your-image.jpg"
            alt="Profile"
          />
          <input
            className="w-full h-8 relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none rounded-md bg-gray-200 p-2"
            type="search"
            placeholder="Search"
          />
        </div>
        <hr className="mb-2" />
        <h2 className="font-bold text-lg mb-2 text-[#178582]">Chats</h2>
        <div className="bg-[#FFF]  justify-between flex flex-col">
          <div className="flex items-center mb-4 bg-[#178582] rounded-lg p-2">
            <img
              className="rounded-full w-8 h-8"
              src="path-to-chat-image.jpg"
              alt="Chat"
            />
            <div className="ml-4">
              <p className="text-md text-white">Name</p>
              <p className="text-sm text-white">Last message...</p>
            </div>
            <div className="ml-auto">
              <p className="text-sm text-black-500 ">Time</p>
              <p className="text-sm text-white bg-[#EA5455] rounded-full text-center font-semibold ">
                3
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4 bg-[#FFF] rounded-lg p-2">
            <img
              className="rounded-full w-8 h-8"
              src="path-to-chat-image.jpg"
              alt="Chat"
            />
            <div className="ml-4">
              <p className="text-md text-black-500">Name</p>
              <p className="text-sm text-black-500">Last message...</p>
            </div>
            <div className="ml-auto">
              <p className="text-sm text-black-500 ">Time</p>
              <p className="text-sm text-white bg-[#EA5455] rounded-full text-center font-semibold ">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/6 bg-[#FFF] p-4  h-screen">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              className="rounded-full w-10 h-10"
              src="path-to-your-image.jpg"
              alt="Profile"
            />
            <p className="ml-4">Name (Designation)</p>
          </div>
          <div className="flex w-2/5 items-center">
            <input
              className="w-full h-8 relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none rounded-md bg-gray-200 p-2"
              type="search"
              placeholder="Search"
            />
            <button className="ml-4">
              <img src={VerticalDots} alt="More options" className="h-4 l-4" />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex w-full h-screen">
          <div
            className="w-full bg-[#FFF] p-4"
            style={{
              backgroundImage: `url(${ChatImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex justify-between items-center mb-4"></div>
            <hr />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img
                  className="rounded-full w-8 h-8"
                  src="path-to-user1-image.jpg"
                  alt="User 1"
                />
                <div className="ml-4">
                  <p className="text-sm text-black-500 p-2 rounded-lg bg-[#FFFFFF]">
                    User 1's message...
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="mr-4">
                  <p className="text-sm text-white p-2 rounded-lg bg-[#178582]">
                    User 2's message...
                  </p>
                </div>
                <img
                  className="rounded-full w-8 h-8"
                  src="path-to-user2-image.jpg"
                  alt="User 2"
                />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <input
                className="border rounded-lg p-2 flex-grow mr-2"
                type="text"
                placeholder="Type a message..."
              />
              <Button
                className="bg-blue-500 text-white rounded-lg p-2"
                color={"teal-600"}
                buttonText={"Send"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingScreen;
