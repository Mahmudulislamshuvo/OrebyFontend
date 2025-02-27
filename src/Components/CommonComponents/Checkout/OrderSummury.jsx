// src/components/OrderSummary.jsx
import React from "react";

const OrderSummary = () => {
  const products = [
    {
      name: "Mountain Mist Artwork Tee",
      price: 36.0,
      quantity: 1,
      size: "L",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Swirls Artwork Tee",
      price: 36.0,
      quantity: 1,
      size: "M",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "3D Glasses Artwork Tee",
      price: 36.0,
      quantity: 1,
      size: "L",
      image: "https://via.placeholder.com/150",
    },
  ];

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>
      {products.map((product, index) => (
        <div key={index} className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-16 w-16 object-cover"
            />
            <div className="ml-4">
              <h4 className="text-sm text-gray-700">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.size}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">${product.price}</div>
        </div>
      ))}
      <div className="mt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
