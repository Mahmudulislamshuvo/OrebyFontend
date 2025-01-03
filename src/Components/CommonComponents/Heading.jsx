import React from "react";
import Timer from "../CommonComponents/Timer";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Heading = ({
  tittle = "Today’s",
  description = true,
  timeofOffer = 0,
  timeStamp = false,
  SliderNext,
  SliderPrev,
  Isarrow = false,
  IsButton = false,
}) => {
  return (
    <div className="pb-10 pt-[140px]">
      <div className="container">
        <div className="flex">
          <div className="flex w-full items-center justify-start">
            <div>
              <div className="flex w-full items-center gap-x-4 text-center">
                <span className="block h-10 w-5 rounded bg-red_DB4444"></span>
                <h4 className="font-poppins text-base font-semibold text-red_DB4444">
                  {tittle ? tittle : "Today’s"}
                </h4>
              </div>
              <div>
                {description && (
                  <h3 className="pt-6 font-inter text-[36px] font-semibold leading-[48px] tracking-[4%]">
                    {description ? description : "Flash Sales"}
                  </h3>
                )}
              </div>
            </div>
            <div className="self-end pl-[87px]">
              {timeStamp && <Timer timeofOffer={timeofOffer} />}
            </div>
          </div>
          {Isarrow && (
            <div className="flex w-full items-end justify-end gap-x-5 text-end text-[30px]">
              <span
                onClick={SliderPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-whitesmoke_F5F5F5 p-3 text-center transition-all hover:bg-red_DB4444 hover:text-whiteColor"
              >
                <IoMdArrowBack />
              </span>
              <span
                onClick={SliderNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-whitesmoke_F5F5F5 p-3 text-center transition-all hover:bg-red_DB4444 hover:text-whiteColor"
              >
                <IoMdArrowForward />
              </span>
            </div>
          )}
          {IsButton && (
            <div className="flex w-full items-end justify-end gap-x-5 text-end">
              <button className="rounded bg-red_DB4444 px-12 py-4 text-whiteColor transition-all hover:bg-red-300">
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heading;
