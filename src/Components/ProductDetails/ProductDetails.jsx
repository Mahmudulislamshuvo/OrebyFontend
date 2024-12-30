import React from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import { useGetsingleProductQuery } from "../../Features/Api/PtoductApi";

const ProductDetails = () => {
  const { data, error, isLoading } = useGetsingleProductQuery(parseInt(1));

  return (
    <div className="container">
      <div className="flex">
        <div className="mr-4 w-[60%]">
          <ImageGallery image={data?.images} />
        </div>
        <div className="w-[40%] bg-red-300"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
