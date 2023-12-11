import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    time: "12:00 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam volutpat sapien, nec eleifend lorem pretium id.",
  },
  {
    id: 2,
    name: "Jane Smith",
    time: "1:30 PM",
    text: "Another review text here.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    time: "2:45 PM",
    text: "Yet another review text here.",
  },
];

function ReviewsCard() {
  return (
    <div className="max-w-full mx-auto">
      <div
        className="reviews-container"
        style={{ maxHeight: "400px", overflowY: "scroll" }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg overflow-hidden shadow-lg p-6 mb-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="data:image/jpeg;base64,/your-base64-image-data"
                  alt="Image"
                  className="rounded-full w-12 h-12"
                />
                <div className="ml-4">
                  <div className="font-semibold text-sm mb-2">
                    {review.name}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.time}</p>
            </div>
            <p className="text-gray-700 text-sm mt-4">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsCard;
