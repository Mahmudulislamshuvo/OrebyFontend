import React from "react";
import { GoDotFill } from "react-icons/go";
import AboutCategoryAwaiting from "../CommonComponents/AboutCategoryAwaiting";
import CategorySkeleton from "../CommonComponents/CategorySkeleton";

const ProductLeft = ({ CategoryData = [], IsLoading, handleCategory }) => {
  return (
    <>
      <div className="w-[25%]">
        <div className="mb-20">
          {IsLoading ? (
            <CategorySkeleton />
          ) : (
            <AboutCategoryAwaiting
              CategoryData={CategoryData}
              IsLoading={IsLoading}
              handleCategory={handleCategory}
            />
          )}
          <div className="pt-10">
            <h3 className="pb-4 font-poppins text-[20px] font-bold">
              Shop by Color
            </h3>
            <div className="flex flex-col gap-y-[18px] transition-all">
              <div className="flex cursor-pointer items-center py-1 text-center transition-all hover:bg-red_DB4444 hover:py-2 hover:pl-2 hover:text-whiteColor">
                <span className="pr-3 text-text2_black_full">
                  <GoDotFill className="h-[15px] w-[15px]" />
                </span>
                <span className="loading-[30px] font-poppins text-base">
                  Color 1
                </span>
              </div>
              <div className="flex cursor-pointer items-center py-1 text-center transition-all hover:bg-red_DB4444 hover:py-2 hover:pl-2 hover:text-whiteColor">
                <span className="pr-3 text-[#FF0000]">
                  <GoDotFill className="h-[15px] w-[15px]" />
                </span>
                <span className="loading-[30px] font-poppins text-base">
                  Color 2
                </span>
              </div>
              <div className="flex cursor-pointer items-center py-1 text-center transition-all hover:bg-red_DB4444 hover:py-2 hover:pl-2 hover:text-whiteColor">
                <span className="pr-3 text-green_00FF66">
                  <GoDotFill className="h-[15px] w-[15px]" />
                </span>
                <span className="loading-[30px] font-poppins text-base">
                  Color 3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLeft;
