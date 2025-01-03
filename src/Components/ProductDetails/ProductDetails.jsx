import React, { useState } from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import { useGetsingleProductQuery } from "../../Features/Api/PtoductApi";
import SpacificProductDetails from "../CommonComponents/ProductsDetails/SpacificProductDetails";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../CommonComponents/Skeletons/ProductDetailsSkeleton";
import { useGetProductByCategoryQuery } from "../../Features/Api/PtoductApi";
import Heading from "../CommonComponents/Heading";
import ProductCart from "../CommonComponents/ProductCart";
import Slider from "react-slick";

const ProductDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const Params = useParams();
  const { data, error, isLoading } = useGetsingleProductQuery(
    parseInt(Params.id),
  );

  const ProductByCategory = useGetProductByCategoryQuery(data?.category);
  const relatedProducts = ProductByCategory?.data?.products || [];
  console.log(relatedProducts[0]);

  return (
    <div className="container">
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div>
          <div className="flex">
            <div className="mr-4 w-[60%]">
              <ImageGallery image={data?.images} />
            </div>
            <div className="w-[40%]">
              <SpacificProductDetails ProductDetailsData={data} />
            </div>
          </div>
          <div>
            <Heading description={false} tittle={"Related Item"} />
            <div className="pb-[140px]">
              <Slider {...settings}>
                {relatedProducts?.map((item) => (
                  <ProductCart ItemData={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
