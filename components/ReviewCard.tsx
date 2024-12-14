import { FaPaw } from "react-icons/fa6";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

type RatingStarsProps = {
  rating: number;
};

const ReviewCard = ({ name, rating, text }: ReviewCardProps) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center text-center">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center">
        <RatingStars rating={rating} />
      </div>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

// Star Rating Component
const RatingStars = ({ rating }: RatingStarsProps) => {
  const totalStars = 5; // Total number of stars
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${
            index < rating ? "text-amber-500" : "text-gray-300"
          }`}
        >
          <FaPaw />
        </span>
      ))}
    </div>
  );
};

export default ReviewCard;
