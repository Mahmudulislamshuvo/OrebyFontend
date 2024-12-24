import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";
import { useBestSellingProductQuery } from "../../../Features/Api/PtoductApi";

const BestSelling = () => {
  const { data, error, isLoading } = useBestSellingProductQuery();

  return (
    <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
      <ProductCommonLayout
        ProductCart={ProductCart}
        tittle={"This Month"}
        description={"Best Selling Products"}
        SlidshowNumber={4}
        ComponentData={data ? data.products : []}
        isLoading={isLoading}
        IsButton={true}
        autoplay={true}
      />
    </div>
  );
};

export default BestSelling;
