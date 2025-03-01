import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
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
              d="M9 12l2 2l4-4m2 8l-2 2l-4-4m6-6a9 9 0 11-18 0a9 9 0 0118 0z"
            />
          </svg>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Payment Successful!
          </h2>
          <p className="mt-2 text-gray-600">
            Your payment was processed successfully. Thank you for your order.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block rounded-md bg-green-600 px-6 py-2 text-lg font-medium text-white transition-all hover:bg-green-700"
          >
            Go to Home
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link
            to="/order-details"
            className="inline-block text-sm font-medium text-green-600 hover:underline"
          >
            View Order Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
