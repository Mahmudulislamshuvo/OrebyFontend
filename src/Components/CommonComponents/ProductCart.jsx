import React from "react";
import cardImg from "../../assets/FlashSale/p1.png";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegEye, FaStar } from "react-icons/fa";

const ProductCart = ({
  discount = 0,
  ProductName = "XYZ",
  price = 0,
  BeforePrice = 0,
  reviews = 0,
}) => {
  return (
    <div>
      <div className="container">
        <div className="group relative h-[250px] w-[270px] overflow-hidden rounded bg-whitesmoke_F5F5F5">
          <span className="ml-3 mt-3 inline-block rounded bg-red_DB4444 px-3 py-1 text-xs font-normal text-whiteColor">
            {discount}
          </span>
          <div className="h-[180] w-[190] px-10 pt-3">
            <img src={cardImg} alt={cardImg} className="w-full object-cover" />
          </div>
          <div className="absolute right-2 top-3">
            <span className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-whiteColor text-center text-[20px] text-text2_black_full">
              <IoHeartOutline />
            </span>
            <span className="mt-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-whiteColor text-center text-[20px] text-text2_black_full">
              <FaRegEye />
            </span>
          </div>
          <div className="absolute bottom-[-100%] left-0 w-full cursor-pointer bg-text2_black_full transition-all duration-300 ease-in-out hover:bg-red_DB4444 group-hover:bottom-0">
            <p className="loading-6 py-2 text-center font-poppins text-base font-medium text-whiteColor">
              Add To Cart
            </p>
          </div>
        </div>
        <div>
          <div className="p-4">
            <h3 className="font-poppins text-base font-medium text-text2_black_full">
              {ProductName}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-poppins text-base font-medium text-red_DB4444">
                {price}
              </span>
              <span className="font-base font-poppins text-text2_black_full line-through opacity-50">
                {BeforePrice}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1 text-center">
              {[...new Array(5)].map((_, index) => (
                <span className="flex text-YellowStart_FFAD33">
                  <FaStar />
                </span>
              ))}
              {/* <span className="text-text2_black_full opacity-25">
                <FaStar />
              </span> */}
              <span className="block font-poppins text-sm font-semibold opacity-50">
                {reviews ? reviews : `(${[...new Array(5)].length})`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
