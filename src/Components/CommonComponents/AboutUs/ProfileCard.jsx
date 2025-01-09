import React from "react";
import Member from "../../../assets/Aboutus/member.png";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const ProfileCard = ({ ProfileCardData }) => {
  return (
    <div>
      <div className="mt-[140px]">
        <div>
          <img src={ProfileCardData.img} alt={ProfileCardData.img} />
        </div>
        <div className="mt-8">
          <h5 className="pb-2 font-inter text-[32px] font-bold leading-[30px] text-text2_black_full">
            {ProfileCardData.name}
          </h5>
          <h6 className="pb-4 font-poppins text-base text-text2_black_full">
            {ProfileCardData.designation}
          </h6>
          <span className="flex items-center gap-x-4 text-text2_black_full">
            <CiTwitter className="h-6 w-6" />
            <CiInstagram className="h-6 w-6" />
            <RiLinkedinLine className="h-6 w-6" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
