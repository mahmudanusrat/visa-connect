import React from "react";
import Banner from "./Banner";
import VisaStatistics from "./VisaStatistics";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import LatestVisas from "./LatestVisas";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 md:p-10 lg:p-0">
      <Banner></Banner>
      <LatestVisas></LatestVisas>
      <AboutUs></AboutUs>
      <VisaStatistics></VisaStatistics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
