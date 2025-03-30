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
  ComponentData,
  isLoading = false,
  IsButton,
  autoplay = false,
  row = 1,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: SlidshowNumber ? SlidshowNumber : 4,
    slidesToScroll: SlidshowNumber - 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rows: row,
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
        <div>
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(6)].map((_, index) => (
                  <div key={index}>
                    <ProductCartSkeleton />
                  </div>
                ))
              : ComponentData?.map((item, index) => (
                  <div key={index}>
                    <ProductCart ItemData={item} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
