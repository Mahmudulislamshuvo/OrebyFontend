import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { calculateBeforePrice } from "../../helpers/MakeDiscount";
import Star from "./Star";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../Features/AllSlice/cartSlice.js";
import { useAddtocartMutation } from "../../Features/Api/exclusiveApi.js";
import { SuccessToast } from "../../helpers/Toastify.js";

const ProductCart = ({ ItemData, isLoading }) => {
  const [Addtocart, { data }] = useAddtocartMutation();
  const dispatch = useDispatch();
  // Before price calculate another way to use
  // const runningPrice = ItemData.price;
  // const discountPercentage = ItemData.discountPercentage;
  // const beforePrice = calculateBeforePrice(runningPrice, discountPercentage);
  // In jsx
  // {`Before Price: $${beforePrice.toFixed(2)}`}

  const HandleAddtoCart = async ({ _id }) => {
    try {
      const response = await Addtocart({ product: _id, quantity: 1 });
      console.log(response);
      if (response?.data) {
        SuccessToast(`Add to cart Succusful`);
      }
    } catch (error) {
      console.log("Error from HandleAddtoCart ProductCart.jsx");
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="group relative h-[250px] w-[270px] overflow-hidden rounded bg-whitesmoke_F5F5F5">
            {ItemData?.discount && (
              <span className="ml-3 mt-3 inline-block rounded bg-red_DB4444 px-3 py-1 text-xs font-normal text-whiteColor">
                {`-${ItemData?.discount}%`}
              </span>
            )}
            <Link to={`/productdetails/${ItemData?._id}`}>
              <div className="h-[180] w-[190] px-10 pt-3">
                <img
                  src={ItemData?.image[0]}
                  alt={ItemData?.image[0]}
                  className="w-full object-cover"
                />
              </div>
            </Link>
            <div className="absolute right-2 top-3">
              <span className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-whiteColor text-center text-[20px] text-text2_black_full">
                <IoHeartOutline />
              </span>
              <span className="mt-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-whiteColor text-center text-[20px] text-text2_black_full">
                <FaRegEye />
              </span>
            </div>
            <div
              onClick={() => HandleAddtoCart(ItemData)}
              className="absolute bottom-[-100%] left-0 w-full cursor-pointer bg-text2_black_full transition-all duration-300 ease-in-out hover:bg-red_DB4444 group-hover:bottom-0"
            >
              <p className="loading-6 py-2 text-center font-poppins text-base font-medium text-whiteColor">
                Add To Cart
              </p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="truncate font-poppins text-base font-medium text-text2_black_full">
                {ItemData?.name ? ItemData?.name : "ProductName"}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-poppins text-base font-medium text-red_DB4444">
                  {ItemData?.price}
                </span>
                {/* discount calculation */}
                <span className="font-base font-poppins text-text2_black_full line-through opacity-50">
                  {ItemData?.price > 0
                    ? `${calculateBeforePrice(
                        ItemData?.price,
                        ItemData?.discount,
                      ).toFixed(2)}`
                    : null}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-center">
                <Star rating={ItemData?.rating ? ItemData?.rating : "4"} />
                {/* {[...new Array(5)].map((_, index) => (
                <span className="flex text-YellowStart_FFAD33">
                  <FaStar />
                </span>
              ))} */}
                <span className="block font-poppins text-sm font-semibold opacity-50">
                  {`(${ItemData?.review ? ItemData?.review.length : `00`})`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
