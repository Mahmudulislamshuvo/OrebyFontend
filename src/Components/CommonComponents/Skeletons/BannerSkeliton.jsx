import React from "react";

const BannerSkeliton = () => {
  return (
    <div className="h-[352px] w-[892px] pl-11 pt-10 outline-none focus:outline-none">
      <div className="relative h-full w-full animate-pulse overflow-hidden rounded-md bg-gray-300">
        <div className="absolute inset-0 h-1/2 w-full animate-pulse bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400"></div>
      </div>
    </div>
  );
};

export default BannerSkeliton;
