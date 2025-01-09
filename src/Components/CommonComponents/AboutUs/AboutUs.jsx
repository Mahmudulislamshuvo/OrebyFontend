import React, { useState } from "react";
import AboutusBanner from "../../../assets/Aboutus/AboutUsBanner.png";
import { BsShop } from "react-icons/bs";
import Slider from "react-slick";
import ProfileCard from "./ProfileCard";
import Member from "../../../assets/Aboutus/member.png";
import Member2 from "../../../assets/Aboutus/memberTwo.png";
import Member3 from "../../../assets/Aboutus/memberThree.png";
import Contactus from "../../Home/ContactUs/ContactUs";

const AboutUs = () => {
  const OurServices = [
    {
      id: 1,
      title: "10.5k",
      description: "Sallers active our site",
    },
    {
      id: 2,
      title: "33k",
      description: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      title: "45.5k",
      description: "Customer active in our site",
    },
    {
      id: 4,
      title: "25k",
      description: "Anual gross sale in our site",
    },
  ];

  const OurMembers = [
    {
      id: 1,
      name: "Tom Cruise",
      designation: "Founder & Chairman",
      img: Member,
    },
    {
      id: 2,
      name: "Emma Watson",
      designation: "Managing Director",
      img: Member2,
    },
    {
      id: 3,
      name: "Will Smith",
      designation: "Product Designer",
      img: Member3,
    },
    {
      id: 4,
      name: "Tom Cruise",
      designation: "Founder & Chairman",
      img: Member,
    },
    {
      id: 5,
      name: "Tom Cruise",
      designation: "Founder & Chairman",
      img: Member2,
    },
    {
      id: 6,
      name: "Tom Cruise",
      designation: "Founder & Chairman",
      img: Member3,
    },
  ];

  //   Slider settings

  const [CurrentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
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
            border: "3px solid #808080",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#000",
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
  //   Slider settings

  return (
    <div className="container">
      <div className="mb-[140px]">
        {/* banner */}
        <div className="flex items-center justify-between">
          <div className="basis-1/2 pr-[75px]">
            <h2 className="font-inter text-[54px] font-semibold leading-[64px] text-text2_black_full">
              Our Story
            </h2>
            <p className="pt-10 font-poppins text-[16px] leading-[26px] text-text2_black_full">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="pt-6 font-poppins text-[16px] leading-[26px] text-text2_black_full">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="relative right-[-8%] top-0 overflow-hidden">
            <img src={AboutusBanner} alt={AboutusBanner} />
          </div>
        </div>
        {/* banner */}
        {/* Box design */}
        <div className="mt-[140px] flex items-center justify-between">
          {/* Box design 1 */}
          {OurServices?.map((item) => (
            <div
              key={item.id}
              className="group w-[270px] rounded border-2 border-black px-8 py-6 text-center transition hover:border-transparent hover:bg-red_DB4444"
            >
              <div className="flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black bg-opacity-50 group-hover:bg-white group-hover:bg-opacity-50">
                  <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black group-hover:bg-white">
                    <BsShop className="h-10 w-10 text-white group-hover:text-black" />
                  </span>
                </span>
              </div>
              <h4 className="mt-6 text-2xl font-bold leading-none text-black group-hover:text-white">
                {item.title}
              </h4>
              <p className="pt-3 text-base text-black group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Box design */}
        {/* Members */}
        <div className="">
          <Slider {...settings}>
            {OurMembers?.map((item) => (
              <div
                key={item}
                className="pl-11 pt-10 outline-none focus:outline-none"
              >
                <ProfileCard ProfileCardData={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Members */}
        <div>
          <Contactus />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
