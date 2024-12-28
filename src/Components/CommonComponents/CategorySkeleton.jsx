import React from "react";

const CategoryListSkeleton = () => {
  return (
    <div className="border-r border-gray-200 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="my-3 h-6 animate-pulse rounded-md bg-gray-300"
        ></div>
      ))}
    </div>
  );
};

export default CategoryListSkeleton;
