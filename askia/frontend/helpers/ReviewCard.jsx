import React from "react";
import { Star } from "lucide-react";

// Utility function to convert country name → ISO code (basic version)
const countryToCode = {
  Nigeria: "ng",
  Kenya: "ke",
  Ghana: "gh",
  USA: "us",
  UK: "gb",
  Canada: "ca",
  India: "in",
  UAE: "ae",
  Germany: "de",
  France: "fr",
  // Add more as needed
};

const ReviewCard = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => {
        const code =
          countryToCode[review.country] || review.country.toLowerCase();

        return (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            {/* Top Section */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <img
                  src={`https://flagcdn.com/w20/${code}.png`}
                  alt={review.country}
                  className="w-5 h-3 object-cover rounded-sm border border-gray-300"
                />
              </div>
              <span className="text-sm text-gray-500">{review.country}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className={`${
                    star <= review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 text-sm leading-relaxed italic">
              “{review.comment}”
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCard;
