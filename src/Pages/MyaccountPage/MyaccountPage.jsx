import React from "react";
import MyAccount from "../../Components/CommonComponents/Myaccount/MyAccount";
import { BreadCrumb } from "../../Components/CommonComponents/BreadCrumb";

const MyaccountPage = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
          <BreadCrumb />
          <h3 className="font-poppins text-sm text-text2_black_full">
            Welcome! <span className="text-red_DB4444">Md Rimel</span>
          </h3>
        </div>
      </div>
      <MyAccount />
    </div>
  );
};

export default MyaccountPage;
