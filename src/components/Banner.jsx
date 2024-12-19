import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import travel1 from "../assets/undraw_travelers_re_y25a (1).svg";
import travel3 from '../assets/travel3.svg'
import travel2 from '../assets/travel2.svg'
const Banner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mt-2 mb-16">
      <Slider {...settings}>
        <div className="relative">
          <img src={travel1} alt="Eiffel Tower" className="h-[600px] object-cover mx-auto" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Simplify Your Visa Application Journey!
            </h2>
            <Link to="/all-visas">
              <button className="bg-[#F14836]  text-white py-2 px-6 rounded-full text-lg">
                Explore Visas
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={travel2}
            alt="Eiffel Tower"
            className="h-[600px] object-cover mx-auto" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Simplify Your Visa Application Journey!
            </h2>
            <Link to="/all-visas">
              <button className="bg-[#F14836]  text-white py-2 px-6 rounded-full text-lg">
                Explore Visas
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={travel3}
            alt="Eiffel Tower"
            className="h-[600px] object-cover mx-auto" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Simplify Your Visa Application Journey!
            </h2>
            <Link to="/all-visas">
              <button className="bg-[#F14836]  text-white py-2 px-6 rounded-full text-lg">
                Explore Visas
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
