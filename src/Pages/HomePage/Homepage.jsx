import React from "react";
import Header from "../../Components/RootLayout/Header";
import Navbar from "../../Components/RootLayout/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import FlashSale from "../../Components/Home/FlashSale/FlashSale";
import Category from "../../Components/Home/Category/Category";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
    </div>
  );
};

export default Homepage;
