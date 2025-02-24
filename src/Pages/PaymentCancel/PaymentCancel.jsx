import React from "react";
import { Link } from "react-router-dom";

const PaymentCancelled = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-100">
      <div className="w-96 rounded-lg bg-white p-8 text-center shadow-xl">
        {/* Cancel Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mx-auto h-16 w-16 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Payment Cancelled
        </h2>

        {/* Description */}
        <p className="mb-6 text-gray-600">
          Unfortunately, your payment was not successful. Please try again or
          check your payment details.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link className="rounded-lg bg-red-500 px-6 py-2 font-medium text-white hover:bg-red-400">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
