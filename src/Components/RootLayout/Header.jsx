import React from "react";

const Header = () => {
  return (
    <div className="bg-text2_black_full">
      <div className="container flex justify-between">
        <div></div>
        <div>
          <h4 className="font-3.5 py-4 font-poppins text-Snow_text1">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h4>
        </div>
        <div className="my-3">
          <select
            name="#"
            id="select"
            className="bg-transparent font-poppins text-Snow_text1"
          >
            <option value="#">English</option>
            <option value="#">Bangla</option>
            <option value="#">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
