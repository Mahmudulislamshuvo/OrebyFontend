import React, { useState } from "react";

import BannerImg from "../../../assets/Banner/BannerImg.jpg";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerCetegories from "../../CommonComponents/BannerCetegories";

const Banner = () => {
  const [CurrentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) =>
      i == CurrentSlide ? (
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#FFFFFF",
            margin: "0 5px",
            opacity: 0.5,
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setCurrentSlide(currentSlide);
    },
  };

  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="w-[25%]">
            <BannerCetegories />
          </div>
          <div className="relative w-[75%]">
            <Slider {...settings}>
              {[...new Array(10)].map(() => (
                <div className="h-[352px] w-[892px] pl-11 pt-10 outline-none focus:outline-none">
                  <img
                    src={BannerImg}
                    alt={BannerImg}
                    className="h-[352px] w-full border-none"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
