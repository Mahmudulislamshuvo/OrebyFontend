import React, { useState } from "react";
import Input from "../Input";

const MyAccount = () => {
  const [Isactive, setIsactive] = useState("");
  return (
    <div className="container">
      <div className="pb-[140px]">
        <div className="flex">
          <div className="basis-1/4">
            <div className="">
              <h4
                onClick={() => setIsactive("Manage My Account")}
                className="cursor-pointer pt-4 font-poppins text-base font-medium text-text2_black_full transition-all"
              >
                Manage My Account
              </h4>
              {Isactive === "Manage My Account" && (
                <ul className="MyaccountCommon pl-4">
                  <li className="cursor-pointer hover:text-red_DB4444">
                    My Profile
                  </li>
                  <li className="cursor-pointer hover:text-red_DB4444">
                    Address Book
                  </li>
                  <li className="cursor-pointer hover:text-red_DB4444">
                    My Payment Options
                  </li>
                </ul>
              )}
              <h4
                onClick={() => setIsactive("My Orders")}
                className="cursor-pointer pt-4 font-poppins text-base font-medium text-text2_black_full"
              >
                My Orders
              </h4>
              {Isactive === "My Orders" && (
                <ul className="MyaccountCommon pl-4">
                  <li className="cursor-pointer hover:text-red_DB4444">
                    My Returns
                  </li>
                  <li className="cursor-pointer hover:text-red_DB4444">
                    My Cancellations
                  </li>
                </ul>
              )}
              <h4 className="cursor-pointer pt-4 font-poppins text-base font-medium text-text2_black_full">
                My WishList
              </h4>
            </div>
          </div>
          <div className="basis-3/4">
            <div className="px-[80px] py-10">
              <h4 className="pb-4 font-poppins text-xl font-medium text-red_DB4444">
                Edit Your Profile
              </h4>
              <div className="flex flex-wrap gap-x-[50px] gap-y-6">
                <Input
                  InputName={"First Name"}
                  width={"330px"}
                  placeholer={"First Name"}
                />
                <Input
                  InputName={"Last Name"}
                  width={"330px"}
                  placeholer={"Last Name"}
                />
                <Input
                  InputName={"Email"}
                  width={"330px"}
                  placeholer={"Email"}
                />
                <Input
                  InputName={"Address"}
                  width={"330px"}
                  placeholer={"Address"}
                />
              </div>
              <div className="pt-6">
                <h4 className="MyaccountCommon pb-2 text-text2_black_full">
                  Password Changes
                </h4>
                <div className="flex flex-col gap-y-4">
                  <Input placeholer={"Current Passwod"} width={"89%"} />
                  <Input placeholer={"New Passwod"} width={"89%"} />
                  <Input placeholer={"Confirm New Passwod"} width={"89%"} />
                </div>
              </div>
              <div className="mr-[11%] flex items-center justify-end pt-6">
                <button className="rounded bg-transparent px-12 py-4 font-poppins text-base font-medium text-text2_black_full">
                  Cancel
                </button>
                <button className="rounded bg-red_DB4444 px-12 py-4 font-poppins text-base font-medium text-white">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
