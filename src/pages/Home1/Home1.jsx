import React from "react";
import Navbar from "../../components/Navbar1/Navbar";
import FeaturedTopics from "../../components/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../components/TrustedByBest/TrustedByBest";

const Home1 = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <TrustedByBest />
      <FeaturedTopics />
    </>
  );
};

export default Home1;
