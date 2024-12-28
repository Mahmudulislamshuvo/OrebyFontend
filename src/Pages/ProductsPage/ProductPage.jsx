import React from "react";
import ProductLeft from "../../Components/Products/ProductLeft";
import PracticeBreadCrumb from "../../Components/CommonComponents/PracticeBreadCrumb";
import ProductRight from "../../Components/Products/ProductRight";
import { useGetProductCategoryListQuery } from "../../Features/Api/PtoductApi";

const ProductPage = () => {
  const { data, error, isLoading } = useGetProductCategoryListQuery();

  return (
    <div className="container">
      <div>
        <PracticeBreadCrumb />
      </div>
      <div className="flex justify-between">
        <ProductLeft CategoryData={data} IsLoading={isLoading} />
        <ProductRight CategoryData={data} />
      </div>
    </div>
  );
};

export default ProductPage;
