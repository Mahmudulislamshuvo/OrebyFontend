import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const PlusMinus = () => {
  return (
    <div>
      <div className="flex border-2">
        <div className="flex items-center rounded border-2 px-2 py-[14px] text-center">
          <FiMinus />
        </div>
        <div>
          <span className="flex items-center px-8 py-2 text-center">2</span>
        </div>
        <div className="flex items-center rounded border-2 px-2 py-[14px] text-center">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default PlusMinus;
