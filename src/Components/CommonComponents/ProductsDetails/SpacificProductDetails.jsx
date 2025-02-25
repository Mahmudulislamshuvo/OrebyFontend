import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import PlusMinus from "./PlusMinus";
import { GoHeart } from "react-icons/go";
import { TbRefresh, TbTruckDelivery } from "react-icons/tb";
import Star from "../Star";
import { useAddtocartMutation } from "../../../Features/Api/exclusiveApi";
import { useParams } from "react-router-dom";
import { SuccessToast } from "../../../helpers/Toastify";

const SpacificProductDetails = ({ ProductDetailsData }) => {
  const [btnloading, setbtnloading] = useState(false);
  const { id } = useParams();

  // call muations
  const [Addtocart, { isLoading, data, errors }] = useAddtocartMutation();

  const [activeSizeId, setActiveSizeId] = useState(null);

  const { name, rating, stock, review, price, description, category } =
    ProductDetailsData;

  const sizes = [
    {
      id: 1,
      size: "XS",
    },
    {
      id: 2,
      size: "S",
    },
    {
      id: 3,
      size: "M",
    },
    {
      id: 4,
      size: "L",
    },
    {
      id: 5,
      size: "XL",
    },
  ];

  // Handle add to cart with response check
  const handleAddtocart = async () => {
    try {
      setbtnloading(true);
      const response = await Addtocart({
        product: id,
        quantity: 1,
      });

      if (response) {
        SuccessToast(
          response?.error
            ? response?.error?.data.message
            : response?.data?.message,
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setbtnloading(false);
    }
  };

  return (
    <div>
      <div>
        <h3 className="pb-4 text-2xl font-semibold tracking-[3%] text-text2_black_full">
          {name}
        </h3>
        {/* stars and instock */}
        <div className="flex items-center pb-4">
          <div className="flex items-center gap-x-1 pr-2 text-yellow-400">
            <Star rating={rating} />
          </div>
          <span className="pr-4 text-text2_black_full opacity-50">
            ({review.length} reviews)
          </span>
          <span className="pr-4 text-text2_black_full opacity-50">|</span>
          <span
            className={
              stock
                ? "font-poppins text-sm text-green_00FF66 opacity-60"
                : "font-poppins text-sm text-red-500 opacity-60"
            }
          >
            {stock ? `In Stock (${stock})` : "Out Of Stock"}
          </span>
          {/* stars and instock end*/}
        </div>
        {/* price and description */}
        <div className="border-b-[2px] border-[rgba(0,0,0,0.5)]">
          <h4 className="pb-6 font-inter text-2xl tracking-[3%] text-text2_black_full">
            {price}
          </h4>
          <p className="pb-6 font-poppins text-sm text-text2_black_full">
            {description}
          </p>
          {/* price and description */}
        </div>
        {/* colors, size, delivery and return design */}
        <div className="mb-4 mt-5 flex items-center text-center">
          <h3 className="pr-6">Colours</h3>
          <div className="flex items-center justify-center gap-x-2">
            <div className="flex h-[21px] w-[21px] items-center justify-center rounded-full border-[4px] border-text2_black_full">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-red_DB4444"></span>
            </div>
            <div className="flex h-[21px] w-[21px] items-center justify-center rounded-full border-[4px] border-text2_black_full">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#A0BCE0]"></span>
            </div>
          </div>
        </div>
        {/* Size  design*/}
        <div className="flex items-center text-center">
          <div className="pr-6">
            <h4 className="font-inter text-xl text-text2_black_full">Size:</h4>
          </div>
          <div className="flex items-center gap-x-4">
            {sizes?.map((size) => (
              <h5
                key={size.id}
                className={
                  activeSizeId === size.id
                    ? "rounded bg-red_DB4444 px-[10px] py-[6px] font-poppins text-sm font-medium text-whiteColor transition-all"
                    : "rounded border-2 border-[rgba(0,0,0,0.3)] px-[10px] py-[6px] font-poppins text-sm font-medium text-text2_black_full transition-all hover:bg-red_DB4444 hover:text-whiteColor"
                }
                onClick={() => setActiveSizeId(size.id)}
              >
                {size.size}
              </h5>
            ))}
          </div>
        </div>
        {/* buy now buton */}
        <div className="mt-6 flex items-center">
          <PlusMinus cartId={id} />
          <button
            onClick={handleAddtocart}
            className={
              btnloading === true
                ? "ml-4 rounded-sm bg-green-400 px-12 py-3 font-poppins text-base font-medium text-whiteColor"
                : "ml-4 rounded-sm bg-red_DB4444 px-12 py-3 font-poppins text-base font-medium text-whiteColor"
            }
          >
            {btnloading === true ? "Loading...." : "Add to Cart"}
          </button>
          <div className="ml-5 rounded border-2 border-[rgba(0,0,0,0.3)] p-[7px]">
            <GoHeart className="h-8 w-8" />
          </div>
        </div>
        {/* delivery Design */}
        <div className="mr-[20%] mt-10 rounded-sm border-2 border-[rgba(0,0,0,0.49)]">
          <div className="flex items-center border-2 border-b-[rgba(0,0,0,0.49)] pb-4 pl-4 pt-6">
            <div>
              <TbTruckDelivery className="h-10 w-10" />
            </div>
            <div className="pl-4">
              <h3 className="font-poppins text-base font-medium text-text2_black_full">
                Free Delivery
              </h3>
              <p className="font-poppins text-xs font-medium text-text2_black_full">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center pb-4 pl-4 pt-6">
            <div>
              <TbRefresh className="h-10 w-10" />
            </div>
            <div className="pl-4">
              <h3 className="font-poppins text-base font-medium text-text2_black_full">
                Return Delivery
              </h3>
              <p className="font-poppins text-xs font-medium text-text2_black_full">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacificProductDetails;
