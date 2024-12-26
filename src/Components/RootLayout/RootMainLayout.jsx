import React from "react";
import Heading from "../RootLayout/Header";
import Navbar from "../RootLayout/Navbar";
import Footer from "../RootLayout/Footer";
import { Outlet } from "react-router-dom";

const RootMainLayout = () => {
  return (
    <div>
      <Heading />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootMainLayout;
