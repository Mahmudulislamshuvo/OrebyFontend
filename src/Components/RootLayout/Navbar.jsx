import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout, CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";
import {
  useGetusercartItemQuery,
  useLogoutMutation,
} from "../../Features/Api/exclusiveApi";

const Navbar = () => {
  const [account, setaccount] = useState(false);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { isLoading, data, iserror } = useGetusercartItemQuery();
  const UserCartItems = data?.data?.AllcartItem || [];

  const AccountDetails = () => {
    setaccount(!account);
  };

  const AccountRef = useRef(null);
  // // get data from redux
  // const { cartTotalItem } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   window.addEventListener("click", (event) => {
  //     if (AccountRef.current.contains(event.target)) {
  //       setaccount(!account);
  //     } else {
  //       setaccount(false);
  //     }
  //   });
  // }, [AccountRef]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (AccountRef.current && !AccountRef.current.contains(event.target)) {
        setaccount(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to clear the cookie manually
  const deleteCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-1`;
  };

  // logout handle
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  const NavMenu = [
    {
      id: 1,
      Item: "Home",
      pathRoute: "/",
    },
    {
      id: 2,
      Item: "Product",
      pathRoute: "/productdetails",
    },
    {
      id: 3,
      Item: "About",
      pathRoute: "/aboutus",
    },
    {
      id: 4,
      Item: "SignUp",
      pathRoute: "/signup",
    },
  ];

  return (
    <div className="border-b-[1px] border-solid border-text2_black_full">
      <div className="container">
        <div className="flex items-center justify-between pb-4 pt-10">
          <div>
            <h1 className="font-inter text-[24px] font-bold">
              <Link to={"/"}>Exclusive</Link>
            </h1>
          </div>
          <div>
            <ul className="flex gap-x-12 font-poppins text-base">
              {NavMenu?.map((nav) => (
                <li
                  className="border-b-[4px] border-transparent transition-all hover:border-[rgba(0,0,0,0.5)] hover:text-red_DB4444"
                  key={"Nav"}
                >
                  <NavLink
                    to={`${nav.pathRoute}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "acive" : ""
                    }
                  >
                    {nav.Item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-between rounded-md bg-whitesmoke_F5F5F5 px-5 py-3">
              {/* <input
              type="text"
              placeholder="What are you looking for?"
              className="loading-4 rounded bg-whitesmoke_F5F5F5 font-poppins text-xs focus:outline-none"
            /> */}
              {/* in upper code problem with text-xs that's the reason I can't see the "?" in placeholder */}
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full rounded bg-whitesmoke_F5F5F5 font-poppins text-sm placeholder-gray-400 focus:outline-none"
              />

              <div className="ml-8 text-2xl">
                <LuSearch />
              </div>
            </div>
            <div className="ml-6 flex items-center gap-x-4 text-center text-2xl">
              <span className="cursor-pointer">
                <GoHeart />
              </span>
              {/* <Link
                to={"/addtocart"}
                data-cartTotalItem={cartTotalItem}
                className="cartNotification cursor-pointer"
              >
                <RiShoppingCart2Line />
              </Link> */}
              <Link
                to={"/addtocart"}
                data-cartTotalItem={isLoading ? "0" : UserCartItems.length}
                className="cartNotification relative cursor-pointer"
              >
                <RiShoppingCart2Line />
              </Link>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red_DB4444 text-center text-xl text-whitesmoke_F5F5F5">
                <span
                  onClick={AccountDetails}
                  ref={AccountRef}
                  className="cursor-pointer"
                >
                  <FiUser />
                </span>
                {account && (
                  <div className="bg-whitesmoke_F5F5F5/30 absolute right-1 top-10 z-20 h-[550%] w-[650%] rounded-lg bg-black/20 py-3 text-whitesmoke_F5F5F5 shadow-lg backdrop-blur-[150px]">
                    <div className="flex-col gap-y-4">
                      <div className="flex items-center pl-4 transition-all hover:bg-whiteColor hover:py-1 hover:text-black_363738">
                        <span className="pr-4 text-[25px]">
                          <FiUser />
                        </span>
                        <h4 className="font-poppins text-[14px]">
                          Manage My Account
                        </h4>
                      </div>
                      <div className="flex items-center pl-4 transition-all hover:bg-whiteColor hover:py-1 hover:text-black_363738">
                        <span className="pr-4 text-[25px]">
                          <FiShoppingBag />
                        </span>
                        <h4 className="font-poppins text-[14px]">My Order</h4>
                      </div>
                      <div className="flex items-center pl-4 transition-all hover:bg-whiteColor hover:py-1 hover:text-black_363738">
                        <span className="pr-4 text-[25px]">
                          <MdOutlineCancel />
                        </span>
                        <h4 className="font-poppins text-[14px]">
                          My Cancellations
                        </h4>
                      </div>
                      <div className="flex items-center pl-4 transition-all hover:bg-whiteColor hover:py-1 hover:text-black_363738">
                        <span className="pr-4 text-[25px]">
                          <CiStar />
                        </span>
                        <h4 className="font-poppins text-[14px]">My Reviews</h4>
                      </div>
                      <div className="flex items-center pl-4 transition-all hover:bg-whiteColor hover:py-1 hover:text-black_363738">
                        <span className="pr-4 text-[25px]">
                          <CiLogout />
                        </span>
                        <h4
                          onClick={handleLogout}
                          className="font-poppins text-[14px]"
                        >
                          Logout
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
