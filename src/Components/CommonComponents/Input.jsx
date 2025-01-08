import React from "react";

const Input = ({ InputName = false, width = "full", placeholer }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="firstname"
        className="MyaccountCommon pb-2 text-text2_black_full"
      >
        {InputName}
      </label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={`Input your ${placeholer}`}
        style={{ width: width }}
        className={`MyaccountCommon rounded bg-whitesmoke_F5F5F5 px-4 py-3 focus:outline-none`}
      />
    </div>
  );
};

export default Input;
