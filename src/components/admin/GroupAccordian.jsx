import React from "react";

const events = [
  {
    id: 1,
    date: "2023-10-31",
    time: "10:00 AM",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    id: 2,
    date: "2023-11-01",
    time: "2:30 PM",
    images: ["image4.jpg", "image5.jpg"],
  },
];

function EventCard({ date, time, images }) {
  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-md p-4 mb-4  border-2 border-black">
      <div className="flex flex-row justify-between">
        <div>
          <div className="text-sm font-semibold mb-2">{date}</div>
          <div className="text-gray-600 text-sm">{time}</div>
        </div>
        <div className="flex items-center space-x-1">
          {images.map((image, index) => (
            <img
              key={index}
              className="object-cover w-6 h-6 border-2 border-white rounded-full"
              src={image}
            />
          ))}
          <p className="flex items-center justify-center w-6 h-6  text-sm text-blue-600 bg-blue-100 border-2 border-white rounded-full">
            +{images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

function GroupAccordian() {
  return (
    <div className="max-w-3xl mx-auto">
      {events.map((event) => (
        <EventCard
          key={event.id}
          date={event.date}
          time={event.time}
          images={event.images}
        />
      ))}
    </div>
  );
}

export default GroupAccordian;
