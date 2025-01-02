import React, { useState } from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import { useGetsingleProductQuery } from "../../Features/Api/PtoductApi";
import { FaStar } from "react-icons/fa6";
import PlusMinus from "./PlusMinus";
import { GoHeart } from "react-icons/go";
import { TbRefresh, TbTruckDelivery } from "react-icons/tb";

const ProductDetails = () => {
  const { data, error, isLoading } = useGetsingleProductQuery(parseInt(1));
  const [activeSizeId, setActiveSizeId] = useState(null);

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

  return (
    <div className="container">
      <div className="flex">
        <div className="mr-4 w-[60%]">
          <ImageGallery image={data?.images} />
        </div>
        <div className="w-[40%]">
          <div>
            <h3 className="pb-4 text-2xl font-semibold tracking-[3%] text-text2_black_full">
              Havic HV G-92 Gamepad
            </h3>
            {/* stars and instock */}
            <div className="flex items-center pb-4">
              <div className="flex items-center gap-x-1 pr-2 text-yellow-400">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
              <span className="pr-4 text-text2_black_full opacity-50">
                (150 Reviews)
              </span>
              <span className="pr-4 text-text2_black_full opacity-50">|</span>
              <span className="font-poppins text-sm text-green_00FF66 opacity-60">
                In Stock
              </span>
              {/* stars and instock end*/}
            </div>
            {/* price and description */}
            <div className="border-b-[2px] border-[rgba(0,0,0,0.5)]">
              <h4 className="pb-6 font-inter text-2xl tracking-[3%] text-text2_black_full">
                $192.00
              </h4>
              <p className="pb-6 font-poppins text-sm text-text2_black_full">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
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
                <h4 className="font-inter text-xl text-text2_black_full">
                  Size:
                </h4>
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
              <PlusMinus />
              <button className="ml-4 rounded-sm bg-red_DB4444 px-12 py-3 font-poppins text-base font-medium text-whiteColor">
                Buy Now
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
                    Free Delivery
                  </h3>
                  <p className="font-poppins text-xs font-medium text-text2_black_full">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
