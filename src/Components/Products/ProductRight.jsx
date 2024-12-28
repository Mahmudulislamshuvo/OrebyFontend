import React, { useState } from "react";
import { useGetAllProductQuery } from "../../Features/Api/PtoductApi";
import ProductCart from "../CommonComponents/ProductCart";

const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setpage] = useState(1);
  const [pageShowItem, setpageShowItem] = useState(9);
  let allProducts = data?.limit / 9;

  // pagination Functionality
  const HandlePageNumber = (index) => {
    setpage(index);
  };

  return (
    <>
      <div className="w-[75%]">
        <div className="flex justify-end">
          <span className="pr-3">Show :</span>
          <select
            name=""
            id=""
            className="custom-select rounded-sm border-2 border-text2_black_full px-10 py-1 text-center text-text2_black_full"
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
        </div>
        <div className="mt-[30px] flex flex-wrap justify-between gap-y-5">
          {data?.products
            ?.slice(page * 9 - 9, page * pageShowItem)
            .map((item) => (
              <ProductCart ItemData={item} />
            ))}
        </div>
        {/* <div className="flex gap-x-5 pb-[100px] pt-10">
          <span className="cursor-pointer bg-text2_black_full px-6 py-1 font-poppins text-base text-whiteColor">
            1
          </span>
          <span className="cursor-pointer bg-text2_black_full px-6 py-1 font-poppins text-base text-whiteColor">
            1
          </span>
          <span className="cursor-pointer bg-text2_black_full px-6 py-1 font-poppins text-base text-whiteColor">
            1
          </span>
          <span className="cursor-pointer bg-text2_black_full px-6 py-1 font-poppins text-base text-whiteColor">
            1
          </span>
        </div> */}
        <div className="pb-[100px] pt-10 text-center">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex h-10 -space-x-px text-base">
              <li>
                <span
                  href="#"
                  className="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-text2_black_full px-4 leading-tight text-whiteColor hover:bg-gray-100 hover:text-red_DB4444 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </span>
              </li>
              {[...new Array(Math.ceil(allProducts) || 0)].map((_, index) => (
                <li>
                  <span
                    onClick={() => HandlePageNumber(index + 1)}
                    href="#"
                    className={
                      index + 1 === page
                        ? "flex h-10 items-center justify-center border border-gray-300 bg-red_DB4444 px-4 leading-tight text-whiteColor hover:bg-red_DB4444 hover:text-whiteColor dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-whiteColor"
                        : "flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {index + 1}
                  </span>
                </li>
              ))}

              <li>
                <span
                  href="#"
                  className="flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-text2_black_full px-4 leading-tight text-whiteColor hover:bg-gray-100 hover:text-red_DB4444 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProductRight;
