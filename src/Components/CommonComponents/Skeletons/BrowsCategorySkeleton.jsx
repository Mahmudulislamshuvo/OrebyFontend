import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex space-x-4 overflow-x-auto">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-md bg-gray-200">
          <div className="mb-2 h-12 w-12 rounded-full bg-gray-300"></div>
          <div className="h-4 w-16 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
