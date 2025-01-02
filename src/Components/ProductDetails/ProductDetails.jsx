import React, { useState } from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import { useGetsingleProductQuery } from "../../Features/Api/PtoductApi";
import SpacificProductDetails from "../CommonComponents/ProductsDetails/SpacificProductDetails";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../CommonComponents/Skeletons/ProductDetailsSkeleton";

const ProductDetails = () => {
  const { data, error, isLoading } = useGetsingleProductQuery(parseInt(1));
  const Params = useParams();
  console.log(Params);

  return (
    <div className="container">
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div className="flex">
          <div className="mr-4 w-[60%]">
            <ImageGallery image={data?.images} />
          </div>
          <div className="w-[40%]">
            <SpacificProductDetails ProductDetailsData={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
