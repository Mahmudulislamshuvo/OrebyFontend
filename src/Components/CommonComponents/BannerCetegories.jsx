import React, { useState } from "react";
import { category } from "../../../Data/Data.js";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const BannerCategories = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle dropDown
  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="border-r-[1px] border-solid border-text2_black_full pt-10">
      {category.map((items) => (
        <div key={items.id} className="transition-all">
          <div className="group flex items-center justify-between transition-all hover:bg-red_DB4444 hover:bg-opacity-20 hover:pl-3 hover:pt-4">
            <li className="pb-4 font-poppins text-base leading-6 text-text2_black_full group-hover:text-whiteColor">
              {items.category}
            </li>
            <span
              className="cursor-pointer pb-4 pr-24 group-hover:text-whiteColor"
              onClick={() => handleDropdown(items.id)}
            >
              {items.subCategory ? (
                openDropdown === items.id ? (
                  <FaAngleDown />
                ) : (
                  <FaAngleRight />
                )
              ) : null}
            </span>
          </div>
          {openDropdown === items.id &&
            items.subCategory &&
            items.subCategory.map((subItem) => (
              <div
                key={subItem.id}
                className="my-2 flex flex-col bg-gray-300 transition-all hover:bg-blue-200"
              >
                <li className="text-md text-text_black000000 cursor-pointer py-3 pl-5 font-poppins font-normal transition-all hover:px-5">
                  {subItem.name}
                </li>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default BannerCategories;
