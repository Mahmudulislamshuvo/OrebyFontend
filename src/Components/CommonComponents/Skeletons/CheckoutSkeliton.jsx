import React from "react";

// Skeleton for individual input fields
const SkeletonInput = () => (
  <div className="mb-4 animate-pulse">
    <div className="h-10 w-full rounded-md bg-gray-300"></div>
  </div>
);

// Skeleton for buttons
const SkeletonButton = () => (
  <div className="mb-4 animate-pulse">
    <div className="h-12 w-full rounded-md bg-gray-300"></div>
  </div>
);

// Skeleton for images (like cart item images)
const SkeletonImage = () => (
  <div className="animate-pulse">
    <div className="h-24 w-full rounded-md bg-gray-300"></div>
  </div>
);

// Skeleton for order summary items
const SkeletonOrderSummary = () => (
  <div className="animate-pulse">
    <div className="mb-4 flex">
      <SkeletonImage />
      <div className="ml-4 flex-1">
        <div className="mb-2 h-5 w-full rounded-md bg-gray-300"></div>
        <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-300"></div>
        <div className="h-4 w-1/2 rounded-md bg-gray-300"></div>
      </div>
    </div>
  </div>
);

// Main skeleton for the entire checkout page
const CheckoutSkeleton = () => (
  <div className="container my-10 animate-pulse">
    <div className="font-popins bg-white p-6">
      {/* Shipping Info Skeleton */}
      <div className="mb-8 text-xl font-bold text-gray-800">Shipping Info</div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SkeletonInput />
        <SkeletonInput />
        <SkeletonInput />
        <SkeletonInput />
        <SkeletonInput />
        <SkeletonInput />
      </div>

      {/* Payment Method Skeleton */}
      <div className="mb-4 mt-8 text-xl font-bold text-gray-800">
        Payment Method
      </div>
      <SkeletonButton />
      <SkeletonButton />

      {/* Order Summary Skeleton */}
      <div className="mt-8 text-xl font-bold text-gray-800">Order Summary</div>
      <SkeletonOrderSummary />
      <SkeletonOrderSummary />
      <SkeletonOrderSummary />

      {/* Confirm Payment Button */}
      <SkeletonButton />
    </div>
  </div>
);

export default CheckoutSkeleton;
