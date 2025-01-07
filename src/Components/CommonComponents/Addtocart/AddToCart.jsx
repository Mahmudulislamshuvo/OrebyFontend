import React from "react";
import cartImg from "../../../assets/AddtoCart/CartImg.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const AddToCart = () => {
  return (
    <div className="container">
      <div className="my-20">
        <div className="flex items-center justify-between rounded-md py-4 shadow-lg">
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
          {[...new Array(20)].map((_) => (
            <div className="mt-10 flex items-center justify-between rounded-md shadow-lg">
              <div className="flex basis-1/4 items-center justify-center text-center">
                <div className="flex items-center justify-center">
                  <div className="relative h-[54px] w-[54px] rounded pr-5">
                    <img
                      src={cartImg}
                      alt={cartImg}
                      className="h-full w-full object-contain"
                    />
                    <span className="absolute left-[-10px] top-[5px] flex cursor-pointer items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor">
                      <RxCross2 className="text-[14px]" />
                    </span>
                  </div>
                  <p className="font-poppins text-base text-text2_black_full">
                    LCD Monitor
                  </p>
                </div>
              </div>
              <div className="basis-1/4 text-center">
                <h4 className="font-poppins text-base text-text2_black_full">
                  $207
                </h4>
              </div>
              <div className="basis-1/4 text-center">
                <span className="inline-block rounded border-2 border-[#000] px-2 text-center">
                  <div className="flex font-poppins text-base text-text2_black_full">
                    <span className="py-1">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={1}
                        className="w-12 text-center"
                      />
                    </span>
                    <div>
                      <span>
                        <MdKeyboardArrowUp />
                      </span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="basis-1/4 text-center">
                <h4 className="font-poppins text-base text-text2_black_full">
                  $2056
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* cart design */}
        {/* buttons */}
        <div className="mt-10 flex items-center justify-between">
          <button className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full">
            Return To Shop
          </button>
          <button className="rounded border-2 border-[rgba(0,0,0,0.5)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full">
            Return To Shop
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
            <div>
              <h3 className="font-poppins text-xl font-medium text-text2_black_full">
                Cart Total
              </h3>
              <div className="flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.5)] py-4">
                <h5>Subtotal:</h5>
                <h5>$1750</h5>
              </div>
              <div className="flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.5)] py-4">
                <h5>Shipping:</h5>
                <h5>Free</h5>
              </div>
              <div className="flex items-center justify-between py-4">
                <h5>Total:</h5>
                <h5>$1750</h5>
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
