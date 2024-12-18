import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Timer = () => {
  return (
    <div className="flex">
      <div>
        <span className="text-[12px] font-medium text-text2_black_full">
          Days
        </span>
        <h5 className="text-[32px] font-bold text-text2_black_full">03</h5>
      </div>
      <div className="">
        <span className="text-[40px] font-medium text-red_DB4444 opacity-80">
          :
        </span>
      </div>
    </div>
  );
};

export default Timer;
