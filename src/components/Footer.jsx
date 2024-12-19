import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-10">
      <div className="grid lg:flex justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-14" />
            <h1 className="text-xl text-[#F14836] md:text-2xl font-bold">Visa Connect</h1>
          </div>
          <p>We provide clear, step-by-step guidance tailored
           to your <br /> travel and immigration goals.
            </p>
          <div className="space-y-2">
            <p><span className="font-bold"> Address:</span> 123 Main Street, City, Country</p>
            <p><span className="font-bold"> Phone:</span> +1 (123) 456-7890</p>
            <p><span className="font-bold"> Email:</span>: support@example.com</p>
          </div>
          <div className="flex gap-4 pt-4 pb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-400 hover:text-[#F14836] transition border p-2 border-white-100 rounded-full"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-400 hover:text-[#F14836] transition border p-2 border-white-100 rounded-full"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-400 hover:text-[#F14836] transition border p-2 border-white-100 rounded-full"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h6 className="text-lg font-semibold">Services</h6>
          <ul className="space-y-2">
            <li className="link link-hover">Home</li>
            <li className="link link-hover">Visa</li>
            <li className="link link-hover">All Visa</li>
            <li className="link link-hover">About Us</li>
          </ul>
        </div>
        <div className="space-y-4 hidden md:block">
          <h6 className="text-lg font-semibold">Newsletter</h6>
          <fieldset className="form-control">
            <label className="label">
              <span className="">Enter your email</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item text-black"
              />
              <button className="btn bg-[#F14836] join-item text-white">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>

      <p className="text-center mt-5 lg:mt-1 border-t-2 pt-5">
        &copy; {new Date().getFullYear()} <span className="text-[#F14836]">Visa Connnect</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
