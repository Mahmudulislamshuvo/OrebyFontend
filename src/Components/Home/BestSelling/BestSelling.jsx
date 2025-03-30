import React, { useEffect, useState } from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";
import { useGetBestSellingProductQuery } from "../../../Features/Api/exclusiveApi.js";

const BestSelling = () => {
  const { isLoading, data, isError } = useGetBestSellingProductQuery();

  const bestSellilngProduct = data?.data?.map((item) => {
    return item.product;
  });

  console.log(data);

  return (
    <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
      <ProductCommonLayout
        ProductCart={ProductCart}
        tittle={"This Month"}
        description={"Best Selling Products"}
        SlidshowNumber={4}
        ComponentData={bestSellilngProduct}
        isLoading={isLoading}
        IsButton={true}
        autoplay={true}
      />
    </div>
  );
};

export default BestSelling;
