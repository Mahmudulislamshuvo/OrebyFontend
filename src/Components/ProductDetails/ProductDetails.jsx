import React from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import { useGetsingleProductQuery } from "../../Features/Api/PtoductApi";
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
  const { data, error, isLoading } = useGetsingleProductQuery(parseInt(1));

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
            <div className="border-b-[2px] border-[rgba(0,0,0,0.5)]">
              <h4 className="pb-6 font-inter text-2xl tracking-[3%] text-text2_black_full">
                $192.00
              </h4>
              <p className="pb-6 font-poppins text-sm text-text2_black_full">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <div>jkgug</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
