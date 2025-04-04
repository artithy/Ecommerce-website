const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => {
        // Check if we need a full, half, or empty star
        if (rating >= index + 1) {
          // Full star
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else if (rating > index + 0.5) {
          // Half star
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else {
          // Empty star
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
