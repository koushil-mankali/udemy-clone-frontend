import React from "react";
import Navbar from "../../components/Navbar1/Navbar";
import FeaturedTopics from "../../components/FeaturedTopics/FeaturedTopics";
import TrustedByBest from "../../components/TrustedByBest/TrustedByBest";
import HomeShowcaseCard from "../../components/Cards/HomeShowcaseCard/HomeShowcaseCard";
import Footer from "../../components/Footer/Footer";

import showcaseImg from "/images/showcase.jpg";

const Home1 = () => {
  const det = {
    ttl: "Become an instructor",
    desc: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
    btnTxt: "Start teaching today",
    btnLink: "/start-teaching",
    img: showcaseImg,
    dir: "right",
  };
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <HomeShowcaseCard det={det} />
      <TrustedByBest />
      <FeaturedTopics />
      <Footer />
    </>
  );
};

export default Home1;
