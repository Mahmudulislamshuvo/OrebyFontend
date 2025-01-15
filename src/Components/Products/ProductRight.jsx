import React, { useState } from "react";
import ProductCart from "../CommonComponents/ProductCart";
import { useGetAllProductsfromDbQuery } from "../../Features/Api/exclusiveApi";
import ProductCartSkeleton from "../../helpers/ProductsSkeliton";
import { MdTableRows } from "react-icons/md";
import { HiMiniViewColumns } from "react-icons/hi2";

const ProductRight = () => {
  const { data, errors, isLoading } = useGetAllProductsfromDbQuery();

  const CategoryData = data?.data;
  const [page, setpage] = useState(1);
  const [pageShowItem, setpageShowItem] = useState(9);
  const [rowCoulm, setrowCoulm] = useState(false);

  let allProducts = CategoryData?.length / pageShowItem || 1;

  // pagination Functionality
  const HandlePageNumber = (index) => {
    if (index > 0 && index <= Math.ceil(allProducts)) {
      setpage(index);
    }
  };

  return (
    <>
      <div className="w-[75%]">
        <div className="flex justify-end">
          <span className="pr-3">Show :</span>
          <select
            onChange={(e) => setpageShowItem(e.target.value)}
            name=""
            id=""
            className="custom-select rounded-sm border-2 border-text2_black_full px-10 py-1 text-center text-text2_black_full"
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
        </div>
        <div className="flex flex-row gap-x-5 text-2xl">
          <span
            className={!rowCoulm && "rounded bg-red-400 p-1 text-whiteColor"}
            onClick={() => setrowCoulm(false)}
          >
            <MdTableRows />
          </span>
          <span
            className={rowCoulm && "rounded bg-red-400 p-1 text-whiteColor"}
            onClick={() => setrowCoulm(true)}
          >
            <HiMiniViewColumns />
          </span>
        </div>
        <div className="flex flex-wrap justify-between gap-y-5">
          {isLoading ? (
            [...new Array(9)].map((_, index) => (
              <div className="flex flex-wrap justify-between gap-y-5">
                <ProductCartSkeleton />
              </div>
            ))
          ) : (
            <div
              className={
                rowCoulm
                  ? "mt-[30px] flex w-full flex-col gap-y-5"
                  : "mt-[30px] flex flex-wrap justify-between gap-y-5"
              }
            >
              {CategoryData?.slice(page * 9 - 9, page * pageShowItem).map(
                (item) => (
                  <ProductCart ItemData={item} />
                ),
              )}
            </div>
          )}
        </div>
        <div className="pb-[100px] pt-10 text-center">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex h-10 -space-x-px text-base">
              <li>
                <span
                  onClick={() => HandlePageNumber(page - 1)}
                  href="#"
                  className="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-text2_black_full px-4 leading-tight text-whiteColor hover:bg-gray-100 hover:text-red_DB4444 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </span>
              </li>
              {[...new Array(Math.ceil(allProducts) || 9)].map((_, index) => (
                <li>
                  <span
                    onClick={() => HandlePageNumber(index + 1)}
                    href="#"
                    className={
                      index + 1 === page
                        ? "flex h-10 cursor-pointer items-center justify-center border border-gray-300 bg-red_DB4444 px-4 leading-tight text-whiteColor hover:bg-red_DB4444 hover:text-whiteColor dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-whiteColor"
                        : "flex h-10 cursor-pointer items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {index + 1}
                  </span>
                </li>
              ))}

              <li>
                <span
                  onClick={() => HandlePageNumber(page + 1)}
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
