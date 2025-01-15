import React, { useState } from "react";
import { category } from "../../../Data/Data.js";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const BannerCategories = ({ allCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle dropDown
  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="">
      <div>
        {allCategory?.data?.data?.map((items) => (
          <div key={items._id} className="transition-all">
            <div className="group flex cursor-pointer items-center justify-between transition-all hover:bg-red_DB4444 hover:bg-opacity-20 hover:pl-3 hover:pt-4">
              <li className="pb-4 font-poppins text-base leading-6 text-text2_black_full group-hover:text-whiteColor">
                {items.name}
              </li>
              <span
                className="cursor-pointer pb-4 pr-24 group-hover:text-whiteColor"
                onClick={() => handleDropdown(items._id)}
              >
                {items?.subCategory.length > 0 ? (
                  openDropdown === items._id ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleRight />
                  )
                ) : null}
              </span>
            </div>
            {/* subCategory Item show */}
            {openDropdown === items._id &&
              items?.subCategory &&
              items?.subCategory.map((subItem) => (
                <div
                  key={subItem._id}
                  className="my-1 ml-2 flex flex-col bg-gray-300 transition-all hover:bg-blue-200"
                >
                  <li className="text-md text-text_black000000 cursor-pointer py-2 pl-5 font-poppins font-normal transition-all hover:px-5">
                    {subItem.name}
                  </li>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCategories;
