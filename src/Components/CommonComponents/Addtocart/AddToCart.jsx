import React, { useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {
  useCartItemDecrementMutation,
  useCartItemIncrementMutation,
  useGetusercartItemQuery,
  useRemoveCartItemMutation,
} from "../../../Features/Api/exclusiveApi.js";
import { InfoToast, SuccessToast } from "../../../helpers/Toastify.js";

const AddToCart = () => {
  const { isLoading, data, isError, refetch } = useGetusercartItemQuery();
  const [removecart] = useRemoveCartItemMutation();
  const [CartItemIncrement] = useCartItemIncrementMutation();
  const [CartItemDecrement] = useCartItemDecrementMutation();

  const AllcartItem = data?.data?.AllcartItem;
  const totalAmount = data?.data?.totalAmount;
  const totalQuantity = data?.data?.totalQuantity;

  // todo: There was without api Data from Local storage
  // const dispatch = useDispatch();
  // const { value, cartTotalAmount, cartTotalItem } = useSelector(
  //   (state) => state?.cart,
  // );

  // // real time update subtotal prcing
  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [localStorage.getItem("CartItems")]);

  // // handle increment
  // const HandleIncrement = (item) => {
  //   dispatch(increment(item));
  // };
  // // handle cart item decrement
  // const HandleDecrement = (item) => {
  //   dispatch(decrement(item));
  // };
  // todo: There was without api Data from Local storage end

  // remove cart Iten from CartPage
  const handleRemoveCart = async (item) => {
    try {
      const response = await removecart(item._id);
      if (response.data) {
        SuccessToast(response?.data?.data?.product?.name);
        refetch();
      }
      const cartItemId = response?.data?.cartItem?._id;
    } catch (error) {
      console.log("error from handleRemoveCart", error);
    }
  };

  // Increment item in cart
  const handleIncrement = async (item) => {
    try {
      // Pass the correct cartId to the API
      const response = await CartItemIncrement(item.product._id).unwrap();
      if (response?.data) {
        SuccessToast("Quantity increased");
      }
    } catch (error) {
      console.log("Error in incrementing cart item", error);
    }
  };

  // Handle Decremnet
  const HandleDecrement = async (item) => {
    try {
      const response = await CartItemDecrement(item.product._id).unwrap();
      if (response?.data) {
        SuccessToast("Quantity Decrese");
      }
    } catch (error) {
      console.log("Error from HandleDecrement", error);
      InfoToast(error.data.statusCode);
    }
  };

  return (
    <div className="container">
      <div className="my-20">
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
        {/* cart design */}
        <div className="custom-scrollbar h-[500px] w-full overflow-y-scroll">
          {AllcartItem?.map((item) => (
            <div
              key={item._id}
              className="mt-10 flex items-center justify-between rounded-md shadow-lg"
            >
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
              <div className="basis-1/4 text-center">
                <h4 className="font-poppins text-base text-text2_black_full">
                  {item.product.price}
                </h4>
              </div>
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
              <div className="basis-1/4 text-center">
                <h4 className="font-poppins text-base text-text2_black_full">
                  {item.product.price * item.quantity}
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* cart design */}
        {/* buttons */}
        <div className="mt-10 flex items-center justify-between">
          <button className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full transition-all hover:border-none hover:bg-red_DB4444 hover:text-whiteColor">
            Return To Shop
          </button>
          <button className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full transition-all hover:border-none hover:bg-red_DB4444 hover:text-whiteColor">
            Update Cart
          </button>
        </div>
        {/* buttons */}
        {/* Coupon code desiggn */}
        <div className="mt-[80px] flex items-start justify-between">
          <div className="flex basis-1/2 items-center justify-start">
            <input
              type="text"
              placeholder="Coupon Code"
              id="coupon"
              name="coupon"
              className="mr-4 w-[60%] rounded border-2 border-[#000] px-10 py-4 font-poppins text-base text-text2_black_full"
            />
            <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base font-medium text-whiteColor">
              Apply Coupon
            </button>
          </div>
          {/* Coupon code desiggn */}
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
                  0
                </h5>
              </div>
              <div className="flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.5)] py-4">
                <h5 className="font-poppins text-base text-text2_black_full">
                  Total Item
                </h5>
                <h5 className="font-poppins text-base text-text2_black_full">
                  {isLoading ? "..." : totalQuantity}
                </h5>
              </div>
              <div className="flex items-center justify-between py-4">
                <h5 className="font-poppins text-base text-text2_black_full">
                  Total:
                </h5>
                <h5 className="font-poppins text-base text-text2_black_full">
                  {isLoading ? "..." : totalAmount}
                </h5>
              </div>
              <div className="flex justify-center">
                <button className="mt-4 rounded bg-red_DB4444 px-12 py-4 font-poppins text-base font-medium text-white">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
          {/* Coupon code desiggn */}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
