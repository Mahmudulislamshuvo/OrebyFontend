import React from "react";

const CategoryCommon = ({ ItemData }) => {
  return (
    <div className="h-[145px] w-[170px] rounded border-4 border-whitesmoke_F5F5F5">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="inline-block text-center text-[60px]">
          {ItemData.img}
        </span>
        <span className="inline-block pt-4 font-poppins text-base text-text2_black_full">
          {ItemData.name}
        </span>
      </div>
    </div>
  );
};

export default CategoryCommon;
