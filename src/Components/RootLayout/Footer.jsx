import React from "react";
import { BsSend } from "react-icons/bs";
import Qrcode from "../../assets/Footer/Qrcode.png";
import Appstore from "../../assets/Footer/AppStore.png";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-text2_black_full">
      <div className="container">
        <div className="flex gap-x-[87px] pb-[60px] pt-[80px]">
          <div className="">
            <h2 className="pb-6 font-inter text-2xl font-bold tracking-[3px] text-whiteColor">
              Exclusive
            </h2>
            <h4 className="cursor-pointer pb-6 font-poppins text-xl text-whiteColor">
              Subscribe
            </h4>
            <p className="pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Get 10% off your first order
            </p>
            <span className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded border-[2px] border-whiteColor bg-transparent py-3 pl-4 pr-8 text-whiteColor"
              />
              <span className="absolute right-[10px] top-[10%] cursor-pointer text-whiteColor">
                <BsSend className="h-6 w-6" />
              </span>
            </span>
          </div>
          <div className="">
            <h2 className="pb-[64px] font-inter text-2xl font-bold tracking-[3px] text-whiteColor">
              Support
            </h2>
            <p className="pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              exclusive@gmail.com
            </p>
            <p className="font-poppins text-[16px] leading-8 text-whiteColor">
              +88015-88888-9999
            </p>
          </div>
          <div className="">
            <h2 className="pb-6 font-inter text-2xl font-bold tracking-[3px] text-whiteColor">
              Account
            </h2>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              My Account
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Login / Register
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Cart
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Wishlist
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Shop
            </p>
          </div>
          <div className="">
            <h2 className="pb-6 font-inter text-2xl font-bold tracking-[3px] text-whiteColor">
              Quick Link
            </h2>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Privacy Policy
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Terms Of Use
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              FAQ
            </p>
            <p className="cursor-pointer pb-4 font-poppins text-[16px] leading-8 text-whiteColor">
              Contact
            </p>
          </div>
          <div className="">
            <h2 className="pb-6 font-inter text-2xl font-bold tracking-[3px] text-whiteColor">
              Download App
            </h2>
            <p className="cursor-pointer pb-2 font-poppins text-[12px] font-medium leading-8 text-[#FAFAFA]">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center justify-center gap-x-[8px]">
              <span>
                <img src={Qrcode} alt={Qrcode} />
              </span>
              <span>
                <img src={Appstore} alt={Appstore} />
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-6 pt-6 text-center">
              <span className="text-whiteColor">
                <RiFacebookLine className="h-6 w-6" />
              </span>
              <span className="text-whiteColor">
                <CiTwitter className="h-6 w-6" />
              </span>
              <span className="text-whiteColor">
                <CiInstagram className="h-6 w-6" />
              </span>
              <span className="text-whiteColor">
                <RiLinkedinLine className="h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 border-[rgba(255,255,255,0.1)] pb-6 pt-4 text-center font-poppins text-base text-[rgba(255,255,255,0.3)]">
        <span className="pr-1">
          <FaRegCopyright />
        </span>
        <span>Copyright Rimel 2022. All right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
