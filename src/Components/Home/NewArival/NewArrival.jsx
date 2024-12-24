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
            <div>
              <picture>
                <img
                  src={NewArrivalPic1}
                  alt={NewArrivalPic1}
                  className="w-full object-cover"
                />
              </picture>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="pb-[47px]">
              <picture>
                <img
                  src={NewArrivalPic2}
                  alt={NewArrivalPic2}
                  className="w-full object-cover"
                />
              </picture>
            </div>
            <div className="flex justify-between">
              <div className="h-[300px] w-[47%] rounded">
                <img
                  src="/src/assets/NewArrival/Frame3.png"
                  alt="New Arrival"
                  className="h-full w-full rounded object-cover"
                />
              </div>

              <div className="h-[300px] w-[47%] rounded">
                <img
                  src="/src/assets/NewArrival/Frame3.png"
                  alt="New Arrival"
                  className="h-full w-full rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
