import React from "react";
import { useLocation, Link } from "react-router-dom";

const PracticeBreadCrumb = () => {
  const { pathname } = useLocation();
  let PathnameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";

  return (
    <div>
      <div className="container">
        <div className="my-10 flex items-center">
          <span className="inline-block rounded-sm bg-green-500 px-2 py-1 text-whiteColor">
            <Link to={"/"}>home</Link>
          </span>
          {PathnameArr?.map((name, index) => {
            BreadCrumbPath += `/${name}`;
            const isLast = index === PathnameArr.length - 1;
            return isLast ? (
              <span
                key={index}
                className="mx-2 inline-block rounded-sm bg-purple-400 px-2 py-1 font-poppins text-whiteColor"
              >
                {name}
              </span>
            ) : (
              <div key={index} className="flex items-center">
                <span className="ml-2 text-xl">/</span>
                <span className="">
                  <Link
                    to={BreadCrumbPath}
                    className="mx-2 inline-block rounded-sm bg-blue-400 px-2 py-1 font-poppins text-whiteColor"
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

export default PracticeBreadCrumb;
