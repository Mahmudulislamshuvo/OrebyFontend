import Input from "../Input";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUsBy = () => {
  return (
    <div className="container">
      <div className="flex">
        {/* contact us Left Design */}
        <div className="mr-[30px] basis-1/4 px-[35px] py-[40px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="border-b-2 border-[#000]">
            <div className="flex items-center gap-x-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor">
                <FiPhoneCall />
              </span>
              <p className="font-poppins text-base font-medium">Call To Us</p>
            </div>
            <div className="pb-8 pt-6">
              <p className="font-poppins text-sm text-text2_black_full">
                We are available 24/7, 7 days a week.
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Phone: +8801611112222
              </p>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex items-center gap-x-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor">
                <MdOutlineMailOutline />
              </span>
              <p className="font-poppins text-base font-medium">Write To US</p>
            </div>
            <div className="pb-8 pt-6">
              <p className="font-poppins text-sm text-text2_black_full">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Emails: customer@exclusive.com
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        {/* contact us Left Design end */}
        {/* contact us Right Design */}
        <div className="basis-2/3 px-8 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex items-center gap-x-4">
            <Input width={"235px"} placeholer={"Name *"} />
            <Input width={"235px"} placeholer={"Email *"} />
            <Input width={"235px"} placeholer={"Phone *"} />
          </div>
          <textarea
            placeholder="Your Message"
            id="Message"
            name="Message"
            className="mt-[45px] min-h-[50%] w-[93.4%] overflow-hidden rounded bg-whitesmoke_F5F5F5 p-4 text-start font-poppins"
          />
          <div className="mr-[6.6%] mt-8 text-end">
            <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins font-medium text-whiteColor">
              Send Massage
            </button>
          </div>
        </div>
        {/* contact us Right Design end */}
      </div>
    </div>
  );
};

export default ContactUsBy;
