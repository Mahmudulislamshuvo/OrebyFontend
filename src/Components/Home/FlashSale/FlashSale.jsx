import React, { Component } from "react";
import Heading from "../../CommonComponents/Heading";
import ProductCart from "../../CommonComponents/ProductCart";
import Slider from "react-slick";
import { CgOverflow } from "react-icons/cg";

const FlashSale = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container">
      <div>
        <Heading tittle={"Today’s"} description={"Flash Sales"} />
      </div>
      <Slider {...settings}>
        {[...new Array(8)].map((_, index) => (
          <div key={index}>
            <ProductCart />
          </div>
        ))}
      </Slider>
      {/* <div className="flex justify-between">
        {[...new Array(4)].map((_, index) => (
          <ProductCart />
        ))}
      </div> */}
      <div className="mb-15 mt-[60px] flex items-center justify-center text-center">
        <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base text-whiteColor">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
