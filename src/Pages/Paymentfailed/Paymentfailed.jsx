import React from "react";

const Paymentfailed = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded-lg bg-white p-8 text-center shadow-xl">
        {/* Icon */}
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
          Payment Failed
        </h2>

        {/* Description */}
        <p className="mb-6 text-gray-600">
          Unfortunately, your payment could not be processed. Please check your
          payment details and try again.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-red-600 px-6 py-2 font-medium text-white hover:bg-red-700">
            Retry Payment
          </button>
          <button className="rounded-lg bg-gray-300 px-6 py-2 font-medium text-gray-800 hover:bg-gray-400">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paymentfailed;
