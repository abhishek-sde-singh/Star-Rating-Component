import { useState } from "react";

const StarRating = ({ starCount = 3 }) => {
  const [fillValue, setFillValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div>
      {Array.from({ length: starCount }, (_, index) => {
        return (
          <span
            className={`${
              (hoverValue === 0 && index < fillValue) || index < hoverValue
                ? "text-yellow-300"
                : ""
            } text-3xl `}
            key={index}
            onClick={() => {
              setFillValue(index + 1);
            }}
            onMouseEnter={() => {
              setHoverValue(index + 1);
            }}
            onMouseLeave={() => {
              setHoverValue(0);
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
