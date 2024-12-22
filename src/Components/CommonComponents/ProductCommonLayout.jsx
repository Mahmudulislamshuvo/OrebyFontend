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
  ComponentData = [],
  isLoading = false,
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
          {isLoading
            ? [...new Array(6)].map((_, index) => (
                <div>
                  <ProductCartSkeleton />
                </div>
              ))
            : ComponentData.map((item, index) => (
                <div>
                  <ProductCart ItemData={item} />
                </div>
              ))}

          {/* {ComponentData?.map((item, index) => (
            <div key={index} className={SlidshowNumber}>
              {isLoading ? (
                <ProductCartSkeleton />
              ) : (
                <ProductCart
                  discount={discount}
                  ProductName={ProductName}
                  price={price}
                  BeforePrice={BeforePrice}
                  reviews={reviews}
                  ItemData={item ? item : {}}
                />
              )}
            </div>
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
