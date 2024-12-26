import React from "react";
import { useLocation, Link } from "react-router-dom";

const PracticeBreadCrumb = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return <div></div>;
};

export default PracticeBreadCrumb;
