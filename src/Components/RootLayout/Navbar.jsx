import React from "react";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout, CiStar } from "react-icons/ci";

const Navbar = () => {
  const NavMenu = [
    {
      id: 1,
      Item: "Home",
    },
    {
      id: 2,
      Item: "Contact",
    },
    {
      id: 3,
      Item: "About",
    },
    {
      id: 4,
      Item: "SignUp",
    },
  ];

  return (
    <div className="border-b-[4px] border-Snow_text1">
      <div className="container flex items-center justify-between pb-4 pt-10">
        <div>
          <h1 className="font-inter text-[24px] font-bold">Exclusive</h1>
        </div>
        <div>
          <ul className="flex gap-x-12 font-poppins text-base">
            {NavMenu?.map((nav) => (
              <li
                className="border-Snow_text1 hover:border-b-[4px]"
                key={"Nav"}
              >
                <NavLink
                  to="/"
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
          <div className="ml-6 flex gap-x-4 text-center text-2xl">
            <span>
              <GoHeart />
            </span>
            <span className="cartNotification">
              <RiShoppingCart2Line />
            </span>
            <div className="relative">
              <span>
                <FiUser />
              </span>
              <div className="absolute right-6 top-5 flex h-[180px] w-[200px] items-center bg-violet-300 text-whitesmoke_F5F5F5">
                <div className="flex-col">
                  <div className="flex items-center">
                    <span className="text-[25px]">
                      <FiUser />
                    </span>
                    <h4 className="font-poppins text-[14px]">
                      Manage My Account
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[25px]">
                      <FiShoppingBag />
                    </span>
                    <h4 className="font-poppins text-[14px]">My Order</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[25px]">
                      <MdOutlineCancel />
                    </span>
                    <h4 className="font-poppins text-[14px]">
                      My Cancellations
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[25px]">
                      <CiStar />
                    </span>
                    <h4 className="font-poppins text-[14px]">My Reviews</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[25px]">
                      <CiLogout />
                    </span>
                    <h4 className="font-poppins text-[14px]">Logout</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
