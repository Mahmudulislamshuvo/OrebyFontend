import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="container flex justify-between">
        <div></div>
        <div>
          <h4 className="font-poppins font-3.5 text-Snow_text1 py-4">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h4>
        </div>
        <div className="my-3">
          <select
            name="#"
            id="select"
            className="bg-transparent text-Snow_text1"
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
