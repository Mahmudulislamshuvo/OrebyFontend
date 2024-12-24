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
  timeStamp,
  SlidshowNumber = 4,
  ComponentData = [],
  isLoading = false,
  IsButton,
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
    sliderRef.current.slickPrev();
  };
  const prev = () => {
    sliderRef.current.slickNext();
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
          IsButton={IsButton}
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
        </Slider>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
