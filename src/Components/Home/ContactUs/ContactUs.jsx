import React from "react";
import { BsHeadset } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const Service = [
  {
    id: 1,
    Icon: (
      <TbTruckDelivery className="rounded-full bg-text2_black_full p-2 text-[40px] text-whiteColor" />
    ),
    tittle: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    Icon: (
      <BsHeadset className="rounded-full bg-text2_black_full p-2 text-[40px] text-whiteColor" />
    ),
    tittle: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    Icon: (
      <IoShieldCheckmarkSharp className="rounded-full bg-text2_black_full p-2 text-[40px] text-whiteColor" />
    ),
    tittle: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
  },
];

const ContactUs = () => {
  return (
    <div className="container">
      <div className="mb-[140px] mt-[208px] flex flex-wrap justify-around">
        {Service?.map((item) => (
          // Add return statement here
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="inline-block rounded-full bg-[rgba(47,46,48,0.30)] p-2">
              {item.Icon}
            </span>
            <h5 className="pt-6 font-poppins text-xl font-semibold text-text2_black_full">
              {item.tittle}
            </h5>
            <p className="pt-2 font-poppins text-sm text-text2_black_full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
