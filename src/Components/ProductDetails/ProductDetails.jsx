import React, { useState } from "react";
import ImageGallery from "../CommonComponents/ProductsDetails/ImageGallery";
import SpacificProductDetails from "../CommonComponents/ProductsDetails/SpacificProductDetails";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../CommonComponents/Skeletons/ProductDetailsSkeleton";
import Heading from "../CommonComponents/Heading";
import ProductCart from "../CommonComponents/ProductCart";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import {
  useGetSingleCategoryQuery,
  useGetSingleProductQuery,
} from "../../Features/Api/exclusiveApi.js";

const ProductDetails = () => {
  // todo: add slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  // todo: fatch data from api
  const params = useParams();
  const { data, error, isLoading } = useGetSingleProductQuery(params.id);

  const ProductByCategory = useGetSingleCategoryQuery(data?.data.category._id);
  const relatedProducts = ProductByCategory?.data?.data?.product || [];

  const navigate = useNavigate();

  return (
    <div className="container">
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div>
          <div className="flex">
            <div className="mr-4 w-[60%]">
              <ImageGallery image={data?.data?.image} />
            </div>
            <div className="w-[40%]">
              <SpacificProductDetails ProductDetailsData={data?.data} />
            </div>
          </div>
          <div>
            <Heading description={false} tittle={"Related Item"} />
            {/* releted product start */}
            <div className="pb-[140px]">
              <Slider {...settings}>
                {relatedProducts?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/productdetails/${item.id}`)}
                  >
                    <ProductCart ItemData={item} />
                  </div>
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
