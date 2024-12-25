import React from "react";
import Header from "../../Components/RootLayout/Header";
import Navbar from "../../Components/RootLayout/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import FlashSale from "../../Components/Home/FlashSale/FlashSale";
import Category from "../../Components/Home/Category/Category";
import BestSelling from "../../Components/Home/BestSelling/BestSelling";
import ExperiencePoster from "../../Components/Home/ExperiencePoster/ExperiencePoster";
import ExploreProducts from "../../Components/Home/ExploreProduct/ExploreProducts";
import NewArrival from "../../Components/Home/NewArival/NewArrival";
import ContactUs from "../../Components/Home/ContactUs/ContactUs";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <BestSelling />
      <ExperiencePoster />
      <ExploreProducts />
      <NewArrival />
      <ContactUs />
    </div>
  );
};

export default Homepage;
