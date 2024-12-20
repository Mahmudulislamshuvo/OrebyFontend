import React from "react";
import Timer from "../CommonComponents/Timer";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Heading = ({
  tittle = "Today’s",
  description = "Flash Sales",
  timeofOffer = 0,
  timeStamp = false,
}) => {
  return (
    <div className="pb-10 pt-[140px]">
      <div className="container">
        <div className="flex">
          <div className="flex items-center justify-start">
            <div>
              <div className="flex items-center gap-x-4 text-center">
                <span className="block h-10 w-5 rounded bg-red_DB4444"></span>
                <h4 className="font-poppins text-base font-semibold text-red_DB4444">
                  {tittle ? tittle : "Today’s"}
                </h4>
              </div>
              <div>
                <h3 className="pt-6 font-inter text-[36px] font-semibold leading-[48px] tracking-[4%]">
                  {description ? description : "Flash Sales"}
                </h3>
              </div>
            </div>
            <div className="self-end pl-[87px]">
              {timeStamp && <Timer timeofOffer={timeofOffer} />}
            </div>
          </div>
          {/* <div className="flex w-full items-end justify-end gap-x-5 text-end text-[30px]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-whitesmoke_F5F5F5 p-3 text-center">
              <IoMdArrowBack />
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-whitesmoke_F5F5F5 p-3 text-center">
              <IoMdArrowForward />
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Heading;
