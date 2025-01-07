import React from "react";
import MyAccount from "../../Components/CommonComponents/Myaccount/MyAccount";
import { BreadCrumb } from "../../Components/CommonComponents/BreadCrumb";

const MyaccountPage = () => {
  return (
    <div>
      <div className="container">
        <div>
          <BreadCrumb />
          <h3 className="">Welcome! Md Rimel</h3>
        </div>
      </div>
      <MyAccount />
    </div>
  );
};

export default MyaccountPage;
