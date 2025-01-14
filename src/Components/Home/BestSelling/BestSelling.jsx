import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";
import { useBestSellingProductQuery } from "../../../Features/Api/PtoductApi";
import { useGetBestSellingProductQuery } from "../../../Features/Api/exclusiveApi.js";

const BestSelling = () => {
  const { data, error, isLoading } = useGetBestSellingProductQuery();

  const Alldata = data?.data.map((item) => {
    return item.product;
  });

  return (
    <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
      <ProductCommonLayout
        ProductCart={ProductCart}
        tittle={"This Month"}
        description={"Best Selling Products"}
        SlidshowNumber={4}
        ComponentData={data ? Alldata : []}
        isLoading={isLoading}
        IsButton={true}
        autoplay={true}
      />
    </div>
  );
};

export default BestSelling;
