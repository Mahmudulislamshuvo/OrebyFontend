import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";
import { useGetAllProductQuery } from "../../../Features/Api/PtoductApi";
import { useGetAllProductDetailsQuery } from "../../../Features/Api/exclusiveApi";

const ExploreProducts = () => {
  const { data, error, isLoading } = useGetAllProductDetailsQuery();

  const AllPruduct = data?.data?.map((item) => {
    return item.product;
  });

  return (
    <div className="container">
      <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
        <ProductCommonLayout
          ProductCart={ProductCart}
          tittle={"Our Products"}
          description={"Explore Our Products"}
          Isarrow={true}
          SlidshowNumber={4}
          ComponentData={AllPruduct}
          isLoading={isLoading}
          row={2}
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

export default ExploreProducts;
