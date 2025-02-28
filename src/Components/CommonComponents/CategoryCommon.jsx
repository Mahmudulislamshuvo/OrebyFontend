import React from "react";

const CategoryCommon = ({ ItemData, isLoading }) => {
  return (
    <div className="h-[145px] w-[170px] rounded border-4 border-whitesmoke_F5F5F5">
      <div className="group flex h-full flex-col items-center justify-center text-center transition-all hover:rounded hover:border-0 hover:bg-red_DB4444 hover:text-whiteColor">
        <span className="inline-block text-center text-[60px]">
          <img src={ItemData.image} alt={ItemData.image} />
        </span>
        <span className="inline-block pt-4 font-poppins text-base text-text2_black_full group-hover:text-whiteColor">
          {ItemData.name}
        </span>
      </div>
    </div>
  );
};

export default CategoryCommon;
