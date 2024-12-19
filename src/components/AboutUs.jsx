import React from "react";
import { Slide } from "react-awesome-reveal";
import traveler from "../assets/travelers.png";
const AboutUs = () => {
  return (
    <div className="md:flex items-center gap-10 mt-10">
      <div className="w-full md:w-2/3 ">
        <h1 className="text-xl text-[#F14836] uppercase font-bold mb-3">About Us</h1>
        <p className="text-3xl mb-4 font-semibold">Your Gateway to the World</p>
        <Slide direction="left" triggerOnce>
          <p className="text-[#404040] text-lg mb-4">
            At <span className="text-[#F14836] font-normal">Visa Connect</span>
            , we are dedicated to simplifying the visa application process for
            individuals and businesses. Our mission is to provide fast,
            reliable, and transparent visa services, helping you achieve your
            dreams of international travel or expansion.
          </p>
        </Slide>
        <Slide direction="right" triggerOnce>
        <p className="text-[#404040] text-lg">
            With years of experience and a team of experts, we handle every
            application with care and precision. Join thousands of satisfied
            customers who trust us for our commitment to excellence and
            unparalleled customer support.
          </p>
        </Slide>
      </div>
      <img src={traveler} alt="" className="w-full md:w-1/3" />
    </div>
  );
};

export default AboutUs;
