import React from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ProductCartSkeleton from "../../helpers/ProductsSkeliton";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        right: "85px",
        top: "-140px",
        position: "absolute",
        zIndex: 2,
        cursor: "pointer",
        fontSize: "25px",
        background: "#F5F5F5",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IoMdArrowForward />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        zIndex: 2,
        cursor: "pointer",
        top: "-140px",
        left: "85%",
        fontSize: "25px",
        background: "#F5F5F5",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IoMdArrowBack />
    </div>
  );
};

const ProductCommonLayout = ({
  ProductCart = () => <ProductCartSkeleton />,
  tittle,
  description,
  Isarrow,
  timeofOffer,
  discount,
  ProductName,
  price,
  BeforePrice,
  reviews,
  timeStamp,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: Isarrow ? <CustomNextArrow /> : null,
    prevArrow: Isarrow ? <CustomPrevArrow /> : null,
  };

  return (
    <div className="container">
      <div className="border-b-black_363738/80 relative border-b-2 pb-[60px]">
        <Heading
          tittle={tittle}
          description={description}
          Isarrow={Isarrow}
          timeofOffer={timeofOffer}
          timeStamp={timeStamp}
        />
        <Slider {...settings}>
          {[...new Array(8)].map((_, index) => (
            <div key={index}>
              <ProductCart
                discount={discount}
                ProductName={ProductName}
                price={price}
                BeforePrice={BeforePrice}
                reviews={reviews}
              />
            </div>
          ))}
        </Slider>
        <div className="mb-15 mt-[60px] flex items-center justify-center text-center">
          <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base text-whiteColor">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
