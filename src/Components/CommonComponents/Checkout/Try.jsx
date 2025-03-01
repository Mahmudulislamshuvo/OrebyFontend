import { useState } from "react";
import {
  useCartItemDecrementMutation,
  useCartItemIncrementMutation,
  useGetusercartItemQuery,
  useRemoveCartItemMutation,
} from "../../../Features/Api/exclusiveApi";
import { SuccessToast } from "../../../helpers/Toastify";

const Try = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState("ms");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  // RTK Query hooks
  const { data: cartData } = useGetusercartItemQuery();
  const [removeCartItem] = useRemoveCartItemMutation();
  const [incrementItem] = useCartItemIncrementMutation();
  const [decrementItem] = useCartItemDecrementMutation();

  const AllcartItem = cartData?.data?.AllcartItem;
  const totalAmount = cartData?.data?.totalAmount;
  const totalQuantity = cartData?.data?.totalQuantity;

  const handleIncrement = async (itemId) => {
    try {
      await incrementItem(itemId).unwrap();
      SuccessToast("Item increased");
    } catch (error) {
      console.error("Increment error:", error);
    }
  };

  const handleDecrement = async (itemId) => {
    try {
      await decrementItem(itemId).unwrap();
      SuccessToast("Item decreased");
    } catch (error) {
      console.error("Decrement error:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeCartItem(itemId).unwrap();
      SuccessToast("Item removed");
    } catch (error) {
      console.error("Remove item error:", error);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Brand logo and other elements */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-gray-600 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-xs transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-700">Your Cart</h3>
            <button
              onClick={() => setCartOpen(false)}
              className="text-gray-600 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <hr className="my-4" />

          {/* Cart Items */}
          {AllcartItem?.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="h-20 w-20 rounded object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ${item.product.price}
                  </p>
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Decrease quantity</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="mx-2 text-sm font-medium text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Increase quantity</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                <span className="sr-only">Remove</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="mt-6 w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the checkout page content */}
      {/* ... (main checkout form section remains similar with React state management) ... */}
    </div>
  );
};

export default Try;
