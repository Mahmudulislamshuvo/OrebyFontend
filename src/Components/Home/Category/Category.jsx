import React from "react";
import CategoryCommon from "../../CommonComponents/CategoryCommon";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiHeadphones } from "react-icons/gi";
import { TbDeviceGamepad } from "react-icons/tb";

const categoryBrows = [
  { id: 1, name: "Phone", img: <MdOutlinePhoneIphone /> },
  { id: 2, name: "Computer", img: <FaComputer /> },
  { id: 3, name: "SmartWatch", img: <BsSmartwatch /> },
  { id: 4, name: "Camera", img: <CiCamera /> },
  { id: 5, name: "HeadPhone", img: <GiHeadphones /> },
  { id: 6, name: "Gaming", img: <TbDeviceGamepad /> },
];

const Category = () => {
  return (
    <>
      <div className="container">
        <div>
          <ProductCommonLayout
            ProductCart={CategoryCommon}
            timeofOffer={2}
            timeStamp={false}
            tittle={"Categories"}
            description={"Browse By Category"}
            Isarrow={true}
            discount={"35%"}
            ProductName={"AK-900 Wired Keyboard"}
            price={"$960"}
            BeforePrice={"$1160"}
            reviews={10}
            SlidshowNumber={6}
            ComponentData={categoryBrows}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
