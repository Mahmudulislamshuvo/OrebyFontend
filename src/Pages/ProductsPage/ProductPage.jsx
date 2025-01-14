import React from "react";
import ProductLeft from "../../Components/Products/ProductLeft";
import PracticeBreadCrumb from "../../Components/CommonComponents/PracticeBreadCrumb";
import ProductRight from "../../Components/Products/ProductRight";
import { useGetProductCategoryListQuery } from "../../Features/Api/PtoductApi";
import { useGetAllCategoryQuery } from "../../Features/Api/exclusiveApi";

const ProductPage = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();

  return (
    <div className="container">
      <div>
        <PracticeBreadCrumb />
      </div>
      <div className="flex justify-between">
        <ProductLeft CategoryData={data?.data} IsLoading={isLoading} />
        <ProductRight />
      </div>
    </div>
  );
};

export default ProductPage;
