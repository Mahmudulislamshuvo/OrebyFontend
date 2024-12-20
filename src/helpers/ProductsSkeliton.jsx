import React from "react";

const ProductCartSkeleton = () => {
  return (
    <div>
      <div className="container">
        <div className="relative h-[250px] w-[270px] overflow-hidden rounded bg-whitesmoke_F5F5F5">
          {/* Discount Skeleton */}
          <span className="ml-3 mt-3 inline-block h-5 w-10 animate-pulse rounded bg-gray-300"></span>

          {/* Image Skeleton */}
          <div className="h-[180px] w-[190px] px-10 pt-3">
            <div className="h-full w-full animate-pulse rounded bg-gray-300"></div>
          </div>

          {/* Icon Skeletons */}
          <div className="absolute right-2 top-3">
            <span className="flex h-[34px] w-[34px] animate-pulse items-center justify-center rounded-full bg-gray-300"></span>
            <span className="mt-2 flex h-[34px] w-[34px] animate-pulse items-center justify-center rounded-full bg-gray-300"></span>
          </div>

          {/* Add To Cart Skeleton */}
          <div className="absolute bottom-[-100%] left-0 w-full animate-pulse bg-gray-300 py-2 transition-all duration-300 ease-in-out group-hover:bottom-0"></div>
        </div>

        {/* Text Content Skeleton */}
        <div className="p-4">
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-300"></div>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-5 w-12 animate-pulse rounded bg-gray-300"></span>
            <span className="h-5 w-12 animate-pulse rounded bg-gray-300"></span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            {[...new Array(5)].map((_, index) => (
              <span
                key={index}
                className="h-4 w-4 animate-pulse rounded bg-gray-300"
              ></span>
            ))}
            <span className="h-5 w-8 animate-pulse rounded bg-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartSkeleton;
