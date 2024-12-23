import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating = 3.5 }) => {
  const Stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <FaStar key={index} className="text-xl text-yellow-500" />;
    } else if (rating >= index + 0.5) {
      return <FaStarHalfAlt key={index} className="text-xl text-yellow-500" />;
    } else {
      return <FaStar key={index} className="text-xl text-[rgba(0,0,0,0.25)]" />;
    }
  });
  return <div className="flex items-center gap-x-1 text-center">{Stars}</div>;
};

export default Star;
