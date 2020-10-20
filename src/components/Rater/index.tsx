import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Rater() {
  const [rating, setRating] = useState<number | string>(0);
  const [isRating, setIsRating] = useState<number | string>(0);

  return (
    <div className="flex justify-center my-6">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={`star-${i}`}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="cursor-pointer"
              color={
                ratingValue <= (isRating || rating) ? '#8cc63f' : '#e2e8f0'
              }
              onMouseEnter={() => setIsRating(ratingValue)}
              onMouseLeave={() => setIsRating(0)}
              size={48}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rater;
