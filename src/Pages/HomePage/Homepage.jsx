import React from "react";
import Header from "../../Components/RootLayout/Header";
import Navbar from "../../Components/RootLayout/Navbar";
import Banner from "../../Components/Banner/Banner";
import Heading from "../../Components/CommonComponents/Heading";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Heading tittle={"Today’s"} description={"Flash Sales"} />
    </div>
  );
};

export default Homepage;
