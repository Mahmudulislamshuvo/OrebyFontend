import React from "react";
import Timer from "../CommonComponents/Timer";

const Heading = ({ tittle, description }) => {
  return (
    <div className="pb-10 pt-[140px]">
      <div className="container">
        <div className="">
          <div>
            <div className="flex items-center gap-x-4 text-center">
              <span className="block h-10 w-5 rounded bg-red_DB4444"></span>
              <h4 className="font-poppins text-base font-semibold text-red_DB4444">
                {tittle ? tittle : "Today’s"}
              </h4>
            </div>
            <div>
              <h3 className="pb-6 font-inter text-[36px] font-semibold leading-[48px] tracking-[4%]">
                {description ? description : "Flash Sales"}
              </h3>
            </div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
