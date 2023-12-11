import React from "react";
import star from "../../assets/icons/Stars.svg";

function StarRating() {
  const starRatings = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 40 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 10 },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto  text-center">
      <div className="mb-4 ml-6 flex items-center">
        {Array(starRatings[0].stars)
          .fill(null)
          .map((_, starIndex) => (
            <img
              key={starIndex}
              src={star}
              alt="Star"
              className="w-6 h-6 mr-1"
            />
          ))}

        <div className="text-md text-gray-600">
          {starRatings[0].stars} stars
        </div>
      </div>

      {starRatings.map((rating, index) => (
        <div key={index} className="mb-4">
          <div className="w-full mx-auto relative">
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm">{rating.stars} stars</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="w-3/4 bg-teal-600 h-2 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold inline-block py-1 px-2 rounded-full text-black-600">
                    {rating.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StarRating;
