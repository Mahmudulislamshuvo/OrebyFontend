import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="w-96 rounded-lg bg-white p-8 text-center shadow-xl">
        {/* Success Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mx-auto h-16 w-16 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Payment Successful
        </h2>

        {/* Description */}
        <p className="mb-6 text-gray-600">
          Your payment was successfully processed. Thank you for your purchase!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-green-600 px-6 py-2 font-medium text-white hover:bg-green-700">
            View Order
          </button>
          <Link
            to={"/"}
            className="rounded-lg bg-gray-300 px-6 py-2 font-medium text-gray-800 hover:bg-gray-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
