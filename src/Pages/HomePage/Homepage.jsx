import React from "react";
import Header from "../../Components/RootLayout/Header";
import Navbar from "../../Components/RootLayout/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import FlashSale from "../../Components/Home/FlashSale/FlashSale";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
    </div>
  );
};

export default Homepage;
