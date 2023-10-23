import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logos/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="navbar flex flex-row mx-auto justify-around items-center sticky top-0 z-50 backdrop-blur-lg backdrop-filter-blur">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Multitach Logo" />
        </Link>
      </div>
      {isMobile && <MenuIcon id="menu-icon" />}
      {!isMobile && (
        <div className="nav-links space-x-4">
          {/* <Link to="/about">
            <button className="relative py-2 px-8 text-base rounded-[50px] overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
              About Us
            </button>
          </Link>
          <Link to="/contact-us">
            <button className="relative py-2 px-8 text-base rounded-[50px] overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
              Contact Us
            </button>
          </Link> */}
          <Link to="/task">
            <button className="relative py-2 px-8 text-base rounded-[50px] overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
              Task
            </button>
          </Link>
          <Link to="/feedback">
            <button className="relative py-2 px-8 text-base rounded-[50px] overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
              Feedback
            </button>
          </Link>
          <Link to="/customer-access/login">
            <button className="bg-indigo-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Login
            </button>
          </Link>
          <Link to="/customer-access/signup">
            <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Sign-Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
