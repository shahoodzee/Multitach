// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            Your company description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
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
          <div>
            <h2 className="text-2xl font-bold mb-4">Employee Access</h2>
            <a
              href="#signup"
              className="block mb-2 text-gray-400 hover:text-white"
            >
              Sign Up
            </a>
            <a href="#login" className="text-gray-400 hover:text-white">
              Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
