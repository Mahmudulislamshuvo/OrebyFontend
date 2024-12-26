import React from "react";
import { useLocation, Link } from "react-router-dom";

export const BreadCrumb = () => {
  const { pathname } = useLocation();
  let pathnameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";

  return (
    <div className="py-20">
      <div className="container">
        <div className="flex items-center gap-x-2">
          <span className="text-white_FFFFFF font-popins inline-block rounded-sm bg-green-500 px-2 py-1">
            <Link to={"/"}>Home</Link>
          </span>
          {pathnameArr.map((name, index) => {
            BreadCrumbPath += `/${name}`;
            const isLast = index === pathnameArr.length - 1;
            return isLast ? (
              <span
                key={index}
                className="text-white_FFFFFF font-popins mx-2 rounded-sm bg-purple-400 px-2 py-1"
              >
                {name}
              </span>
            ) : (
              <div key={index} className="flex items-center">
                <span className="text-xl">/</span>
                <span>
                  <Link
                    className="text-white_FFFFFF font-popins mx-2 rounded-sm bg-blue-500 px-2 py-1"
                    to={BreadCrumbPath}
                  >
                    {name}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
