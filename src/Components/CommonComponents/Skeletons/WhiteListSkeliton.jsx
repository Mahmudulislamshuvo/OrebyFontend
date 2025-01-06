import React from "react";

const WhiteListSkeliton = () => {
  return (
    <div>
      <div className="space-y-8">
        {/* Wishlist Section Skeleton */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="h-6 w-40 animate-pulse rounded bg-gray-300"></div>
            <div className="h-10 w-36 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-lg border p-4"
                >
                  <div className="h-48 w-full rounded bg-gray-300"></div>
                  <div className="mt-4 h-6 w-3/4 rounded bg-gray-300"></div>
                  <div className="mt-2 h-6 w-1/2 rounded bg-gray-300"></div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-8 w-1/2 rounded bg-gray-300"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Just For You Section Skeleton */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-lg border p-4"
                >
                  <div className="h-40 w-full rounded bg-gray-300"></div>
                  <div className="mt-4 h-6 w-3/4 rounded bg-gray-300"></div>
                  <div className="mt-2 h-6 w-1/2 rounded bg-gray-300"></div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-8 w-1/2 rounded bg-gray-300"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteListSkeliton;
