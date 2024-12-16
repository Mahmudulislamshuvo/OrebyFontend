import React from "react";
import { category } from "../../../Data/Data";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="w-[25%] border-r-[1px] border-solid border-text2_black_full pt-10 transition-all">
            {category?.map((items) => (
              <div className="pb-4 font-poppins text-base leading-6 text-text2_black_full transition-all hover:bg-red_DB4444 hover:bg-opacity-20 hover:pl-3 hover:pt-4 hover:text-whiteColor">
                {items.category}
              </div>
            ))}
          </div>
          <div className="w-[75%] bg-red-500">b</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
