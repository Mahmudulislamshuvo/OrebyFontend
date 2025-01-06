import React from "react";
import PracticeBreadCrumb from "../PracticeBreadCrumb";
import ProductCart from "../ProductCart";
import Slider from "react-slick";
import {
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
} from "../../../Features/Api/PtoductApi";
import WhiteListSkeliton from "../Skeletons/WhiteListSkeliton";
import Heading from "../Heading";

const Whitelist = () => {
  const { data, errors, isLoading } = useGetAllProductQuery();
  const justforYou = useGetProductByCategoryQuery("smartphones");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <div className="container">
      <div>
        <div>
          <PracticeBreadCrumb />
        </div>
        {/* wishList */}
        <div className="flex items-center justify-between">
          <div className="font-poppins text-xl text-text2_black_full">
            Wishlist (4)
          </div>
          <button className="rounded border-2 border-[rgba(0,0,0,0.50)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full transition-all hover:border-none hover:bg-red_DB4444 hover:text-whiteColor">
            Move All To Bag
          </button>
        </div>
        {/* WhiteList Products */}
        <div className="mt-[60px]">
          {isLoading ? (
            <WhiteListSkeliton />
          ) : (
            <Slider {...settings}>
              {data?.products?.map((item) => (
                <ProductCart key={item.id} ItemData={item} />
              ))}
            </Slider>
          )}
        </div>
        {/* Just for you */}
        <div className="flex items-center justify-between">
          <Heading tittle={"Just For You"} />
          <button className="rounded border-2 border-[rgba(0,0,0,0.49)] px-12 py-4 font-poppins text-base font-medium text-text2_black_full">
            See All
          </button>
        </div>
        <div className="mb-[140px]">
          {isLoading ? (
            <WhiteListSkeliton />
          ) : (
            <Slider {...settings}>
              {justforYou?.data?.products?.map((item) => (
                <ProductCart key={item.id} ItemData={item} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Whitelist;
