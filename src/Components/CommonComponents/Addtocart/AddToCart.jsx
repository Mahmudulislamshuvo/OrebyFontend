import React, { useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import Lottie from "lottie-react";
import emptyCartAnimation from "../../../assets/Animations/Animation - 1740832149785.json";
import {
  useCartItemDecrementMutation,
  useCartItemIncrementMutation,
  useGetusercartItemQuery,
  useRemoveCartItemMutation,
} from "../../../Features/Api/exclusiveApi.js";
import { InfoToast, SuccessToast } from "../../../helpers/Toastify.js";
import { Link } from "react-router-dom";

const AddToCart = () => {
  // API Queries and Mutations
  const { isLoading, data, isError, refetch } = useGetusercartItemQuery();
  const [removecart] = useRemoveCartItemMutation();
  const [CartItemIncrement] = useCartItemIncrementMutation();
  const [CartItemDecrement] = useCartItemDecrementMutation();

  // Cart Data Handling
  const AllcartItem = data?.data?.AllcartItem || [];
  const totalAmount = data?.data?.totalAmount || 0;
  const totalQuantity = data?.data?.totalQuantity || 0;

  // User Data Storage Handling
  useEffect(() => {
    if (AllcartItem.length > 0) {
      const userData = {
        firstName: AllcartItem[0]?.user?.firstName,
        email: AllcartItem[0]?.user?.email,
        mobile: AllcartItem[0]?.user?.mobile,
      };
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [AllcartItem]);

  // Cart Item Removal Handler
  const handleRemoveCart = async (item) => {
    try {
      const response = await removecart(item._id);
      if (response.data) {
        SuccessToast(response?.data?.data?.product?.name);
        refetch();
      }
    } catch (error) {
      console.log("error from handleRemoveCart", error);
    }
  };

  // Quantity Increment Handler
  const handleIncrement = async (item) => {
    try {
      const response = await CartItemIncrement(item.product._id).unwrap();
      if (response?.data) SuccessToast("Quantity increased");
    } catch (error) {
      console.log("Error in incrementing cart item", error);
    }
  };

  // Quantity Decrement Handler
  const HandleDecrement = async (item) => {
    try {
      const response = await CartItemDecrement(item.product._id).unwrap();
      if (response?.data) SuccessToast("Quantity decreased");
    } catch (error) {
      console.log("Error from HandleDecrement", error);
      InfoToast(error.data.statusCode);
    }
  };

  return (
    <div className="container">
      <div className="my-20">
        {/* Cart Table Headers */}
        {AllcartItem.length > 0 && (
          <div className="flex items-center justify-between rounded-md py-4 pl-7 shadow-lg">
            <div className="basis-1/4 text-center">
              <h4 className="font-poppins text-base text-text2_black_full">
                Product
              </h4>
            </div>
            <div className="basis-1/4 text-center">
              <h4 className="font-poppins text-base text-text2_black_full">
                Price
              </h4>
            </div>
            <div className="basis-1/4 text-center">
              <h4 className="font-poppins text-base text-text2_black_full">
                Quantity
              </h4>
            </div>
            <div className="basis-1/4 text-center">
              <h4 className="font-poppins text-base text-text2_black_full">
                Subtotal
              </h4>
            </div>
          </div>
        )}

        {/* Cart Items or Empty State */}
        <div className="custom-scrollbar h-[500px] w-full overflow-y-scroll">
          {AllcartItem.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-20">
              <div className="mb-8 w-60">
                <Lottie
                  animationData={emptyCartAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>
              <h3 className="mb-4 text-center font-poppins text-2xl font-semibold text-text2_black_full">
                Your Shopping Cart is Empty
              </h3>
              <p className="mb-8 text-center font-poppins text-gray-600">
                Looks like you haven't added any items yet.
                <br />
                Let's fill it up with amazing products!
              </p>
              <Link
                to="/productdetails"
                className="hover:bg-red_c93228 flex items-center rounded-lg bg-red_DB4444 px-8 py-3 font-poppins text-white transition-all hover:scale-105"
              >
                <FiShoppingBag className="mr-2" />
                Explore Products
              </Link>
            </div>
          ) : (
            AllcartItem?.map((item) => (
              <div
                key={item._id}
                className="mt-10 flex items-center justify-between rounded-md shadow-lg"
              >
                {/* Product Details */}
                <div className="ml-7 flex basis-1/4 items-center justify-start text-center">
                  <div className="flex items-center justify-center">
                    <div className="relative h-[54px] w-[54px] rounded pr-5">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.image[0]}
                        className="h-full w-full object-contain"
                      />
                      <span
                        onClick={() => handleRemoveCart(item)}
                        className="absolute left-[-10px] top-[5px] flex cursor-pointer items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor"
                      >
                        <RxCross2 className="text-[14px]" />
                      </span>
                    </div>
                    <p className="font-poppins text-base text-text2_black_full">
                      {item.product.name}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="basis-1/4 text-center">
                  <h4 className="font-poppins text-base text-text2_black_full">
                    ${item.product.price}
                  </h4>
                </div>

                {/* Quantity Controls */}
                <div className="basis-1/4 text-center">
                  <span className="inline-block rounded border-2 border-[#000] px-2 text-center">
                    <div className="flex font-poppins text-base text-text2_black_full">
                      <span className="flex items-center justify-center py-1 text-center">
                        <input
                          type="text"
                          id="number"
                          name="number"
                          value={item.quantity}
                          className="w-12 text-center"
                          readOnly
                        />
                      </span>
                      <div className="flex flex-col items-center">
                        <span onClick={() => handleIncrement(item)}>
                          <MdKeyboardArrowUp className="h-5 w-5 cursor-pointer" />
                        </span>
                        <span onClick={() => HandleDecrement(item)}>
                          <MdKeyboardArrowDown className="h-5 w-5 cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </span>
                </div>

                {/* Subtotal */}
                <div className="basis-1/4 text-center">
                  <h4 className="font-poppins text-base text-text2_black_full">
                    ${item.product.price * item.quantity}
                  </h4>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Actions (Only shown when items exist) */}
        {AllcartItem.length > 0 && (
          <>
            <div className="mt-10 flex items-center justify-between">
              <Link
                to="/productdetails"
                className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full transition-all hover:border-none hover:bg-red_DB4444 hover:text-whiteColor"
              >
                Continue Shopping
              </Link>
              <button className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full transition-all hover:border-none hover:bg-red_DB4444 hover:text-whiteColor">
                Update Cart
              </button>
            </div>

            {/* Cart Summary */}
            <div className="mt-[80px] flex items-start justify-between">
              <div className="flex basis-1/2 items-center justify-start">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="mr-4 w-[60%] rounded border-2 border-[#000] px-10 py-4 font-poppins text-base text-text2_black_full"
                />
                <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base font-medium text-whiteColor">
                  Apply Coupon
                </button>
              </div>

              <div className="w-[40%]">
                <div className="rounded border-2 border-[#000] px-6 py-8">
                  <h3 className="font-poppins text-xl font-medium text-text2_black_full">
                    Cart Total
                  </h3>
                  <div className="flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.5)] py-4">
                    <h5 className="font-poppins text-base text-text2_black_full">
                      Discount
                    </h5>
                    <h5 className="font-poppins text-base text-text2_black_full">
                      $0
                    </h5>
                  </div>
                  <div className="flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.5)] py-4">
                    <h5 className="font-poppins text-base text-text2_black_full">
                      Total Items
                    </h5>
                    <h5 className="font-poppins text-base text-text2_black_full">
                      {totalQuantity}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h5 className="font-poppins text-base text-text2_black_full">
                      Total:
                    </h5>
                    <h5 className="font-poppins text-base text-text2_black_full">
                      ${totalAmount}
                    </h5>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      to="/checkout"
                      className="mt-4 rounded bg-red_DB4444 px-12 py-4 font-poppins text-base font-medium text-white"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
