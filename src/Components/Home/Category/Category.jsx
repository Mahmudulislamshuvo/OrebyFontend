import React from "react";
import CategoryCommon from "../../CommonComponents/CategoryCommon";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiHeadphones } from "react-icons/gi";
import { TbDeviceGamepad } from "react-icons/tb";
import { useGetAllCategoryQuery } from "../../../Features/Api/exclusiveApi";
import BrowsCategorySkeleton from "../../CommonComponents/Skeletons/BrowsCategorySkeleton";

const categoryBrows = [
  { id: 1, name: "Phone", img: <MdOutlinePhoneIphone /> },
  { id: 2, name: "Computer", img: <FaComputer /> },
  { id: 3, name: "SmartWatch", img: <BsSmartwatch /> },
  { id: 4, name: "Camera", img: <CiCamera /> },
  { id: 5, name: "HeadPhone", img: <GiHeadphones /> },
  { id: 6, name: "Gaming", img: <TbDeviceGamepad /> },
  { id: 7, name: "Phone", img: <MdOutlinePhoneIphone /> },
  { id: 8, name: "Computer", img: <FaComputer /> },
  { id: 9, name: "SmartWatch", img: <BsSmartwatch /> },
  { id: 10, name: "Camera", img: <CiCamera /> },
  { id: 11, name: "HeadPhone", img: <GiHeadphones /> },
  { id: 12, name: "Gaming", img: <TbDeviceGamepad /> },
];

const Category = () => {
  const { data, errors, isLoading } = useGetAllCategoryQuery();

  return (
    <>
      <div className="container">
        <div className="border-b-black_363738/80 border-b-2 pb-[60px]">
          <ProductCommonLayout
            ProductCart={isLoading ? BrowsCategorySkeleton : CategoryCommon}
            timeofOffer={2}
            timeStamp={false}
            tittle={"Categories"}
            description={"Browse By Category"}
            Isarrow={true}
            reviews={10}
            SlidshowNumber={6}
            ComponentData={data?.data}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
