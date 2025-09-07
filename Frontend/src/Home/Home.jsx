import React from "react";

import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import Freebooks from "../components/Freebooks.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebooks />
      <Footer />
    </div>
  );
};

export default Home;
