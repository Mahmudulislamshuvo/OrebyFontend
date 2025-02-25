import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useCartItemIncrementMutation } from "../../../Features/Api/exclusiveApi";

const PlusMinus = ({ cartId }) => {
  const ID = cartId;
  const [CartItemIncrement] = useCartItemIncrementMutation();
  // Increment item in cart
  const handleIncrement = async () => {
    try {
      // Pass the correct cartId to the API
      const response = await CartItemIncrement(cartId);
      if (response?.data) {
        console.log("Increment successful", response.data);
      }
    } catch (error) {
      console.log("Error in incrementing cart item", error);
    }
  };

  return (
    <div>
      <div className="flex border-2">
        <div className="flex items-center rounded border-2 px-2 py-[14px] text-center">
          <FiMinus />
        </div>
        <div>
          <span className="flex items-center px-8 py-2 text-center">2</span>
        </div>
        <div
          onClick={handleIncrement}
          className="flex items-center rounded border-2 px-2 py-[14px] text-center"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default PlusMinus;
