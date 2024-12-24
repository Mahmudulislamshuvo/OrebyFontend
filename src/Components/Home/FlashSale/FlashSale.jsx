import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";
import { useGetAllProductQuery } from "../../../Features/Api/PtoductApi";

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="container">
      <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
        <ProductCommonLayout
          ProductCart={ProductCart}
          timeofOffer={2}
          timeStamp={true}
          tittle={"Today’s"}
          description={"Flash Sales"}
          Isarrow={true}
          SlidshowNumber={4}
          ComponentData={data ? data.products : []}
          isLoading={isLoading}
          autoplay={true}
        />
        <div className="mb-15 mt-[60px] flex items-center justify-center text-center">
          <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base text-whiteColor">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
