import React from "react";
import Heading from "../../CommonComponents/Heading";
import NewArrivalPic1 from "../../../assets/NewArrival/Frame1.png";
import NewArrivalPic2 from "../../../assets/NewArrival/Frame2.png";
import NewArrivalPic3 from "../../../assets/NewArrival/Frame3.png";
import NewArrivalPic4 from "../../../assets/NewArrival/Frame4.png";

const NewArrival = () => {
  return (
    <div className="container">
      <div className="mb-10">
        <div>
          <Heading tittle={"Featured"} description={"New Arrival"} />
        </div>
        <div className="flex justify-between gap-x-[30px]">
          <div className="w-[50%]">
            <div className="relative">
              <picture>
                <img
                  src={NewArrivalPic1}
                  alt={NewArrivalPic1}
                  className="w-full object-cover"
                />
              </picture>
              <div className="absolute bottom-0 left-0 h-full w-full pb-8 pl-8 pt-[80%] text-white">
                <h4 className="font-inter text-2xl font-semibold text-whiteColor">
                  PlayStation 5
                </h4>
                <p className="pb-4 pr-[350px] pt-4 font-poppins text-sm text-whiteColor">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <h3 className="cursor-pointer font-poppins text-base font-medium text-whiteColor underline decoration-whitesmoke_F5F5F5 decoration-1 underline-offset-4">
                  Shop Now
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="relative pb-[47px]">
              <picture>
                <img
                  src={NewArrivalPic2}
                  alt={NewArrivalPic2}
                  className="w-full object-cover"
                />
              </picture>
              <div className="absolute bottom-0 left-0 h-full w-full pb-8 pl-8 pt-[25%] text-white">
                <h4 className="font-inter text-2xl font-semibold text-whiteColor">
                  Women’s Collections
                </h4>
                <p className="pb-4 pr-[350px] pt-4 font-poppins text-sm text-whiteColor">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <h3 className="cursor-pointer font-poppins text-base font-medium text-whiteColor underline decoration-whitesmoke_F5F5F5 decoration-1 underline-offset-4">
                  Shop Now
                </h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative h-[300px] w-[47%] rounded">
                <img
                  src={NewArrivalPic3}
                  alt={NewArrivalPic3}
                  className="h-full w-full rounded object-cover"
                />
                <div className="absolute bottom-0 left-0 h-full w-full pb-8 pl-8 pt-[50%] text-white">
                  <h4 className="font-inter text-2xl font-semibold text-whiteColor">
                    Speakers
                  </h4>
                  <p className="pb-4 pr-[50px] pt-4 font-poppins text-sm text-whiteColor">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <h3 className="cursor-pointer font-poppins text-base font-medium text-whiteColor underline decoration-whitesmoke_F5F5F5 decoration-1 underline-offset-4">
                    Shop Now
                  </h3>
                </div>
              </div>

              <div className="relative h-[300px] w-[47%] rounded">
                <img
                  src={NewArrivalPic4}
                  alt={NewArrivalPic4}
                  className="h-full w-full rounded object-cover"
                />
                <div className="absolute bottom-0 left-0 h-full w-full pb-8 pl-8 pt-[50%] text-white">
                  <h4 className="font-inter text-2xl font-semibold text-whiteColor">
                    Perfume
                  </h4>
                  <p className="pb-4 pr-[50px] pt-4 font-poppins text-sm text-whiteColor">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <h3 className="cursor-pointer font-poppins text-base font-medium text-whiteColor underline decoration-whitesmoke_F5F5F5 decoration-1 underline-offset-4">
                    Shop Now
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
