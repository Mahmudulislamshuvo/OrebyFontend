import React, { useRef } from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import ProductCartSkeleton from "../../helpers/ProductsSkeliton";

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
  SlidshowNumber = 4,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: SlidshowNumber ? SlidshowNumber : 4,
    slidesToScroll: SlidshowNumber - 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="relative pb-[60px]">
        <Heading
          tittle={tittle}
          description={description}
          Isarrow={Isarrow}
          timeofOffer={timeofOffer}
          timeStamp={timeStamp}
          SliderNext={next}
          SliderPrev={prev}
        />
        <Slider ref={sliderRef} {...settings}>
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
      </div>
    </div>
  );
};

export default ProductCommonLayout;
