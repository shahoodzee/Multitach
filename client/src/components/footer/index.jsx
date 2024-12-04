// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            Your company description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <br />
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: tahasohail2001@gmail.com</p>
          <p>Phone: +92 321-4178057</p>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Employee Access</h2>
          <Link
            to="/worker/signup"
            className="block mb-2 text-gray-400 hover:text-white"
          >
            Sign Up
          </Link>
          <Link to="/worker/login" className="text-gray-400 hover:text-white">
            Login
          </Link>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex mb-4">
            {/* Add your social media icons and links here */}
            <a href="#facebook" className="mr-4">
              Facebook
            </a>
            <a href="#twitter" className="mr-4">
              Twitter
            </a>
            <a href="#instagram">Instagram</a>
          </div>
          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
            <Link
              to="/about-us"
              className="block mb-2 text-gray-400 hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="block mb-2 text-gray-400 hover:text-white"
            >
              Careers
            </Link>
            <Link
              to="/terms-and-conditions"
              className="block mb-2 text-gray-400 hover:text-white"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/customer-care"
              className="block mb-2 text-gray-400 hover:text-white"
            >
              Customer Care
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
