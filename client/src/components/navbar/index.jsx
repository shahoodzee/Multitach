import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logos/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Cookies from "js-cookie";
import "./navbar.scss";
import DefaultAvatar from "../../images/Default Avatar.jpg";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  };

  return (
    <div className="navbar flex flex-row mx-auto justify-around items-center sticky top-0 z-50 backdrop-blur-lg backdrop-filter-blur">
      <div className="flex items-center">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Multitach Logo" />
          </Link>
        </div>
        {isMobile && <MenuIcon id="menu-icon" />}
      </div>
      <div className="flex justify-around">
        {!isMobile && (
          <div className="nav-links space-x-4 flex items-center">
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
          </div>
        )}
        <div className="flex items-center mx-2 px-2">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  Cookies.remove("token");
                  setIsLoggedIn(false);
                  navigate("/");
                  window.location.reload();
                }}
                className="mr-4 bg-amber-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                Logout
              </button>
              <button
                onClick={handleProfileClick}
                className="ml-4 bg-white text-gray-800 border border-gray-800 overflow-hidden h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <img
                  src={DefaultAvatar}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </button>
              <Link to="/notifications">
                <button className="ml-4 relative py-2 px-8 text-base rounded-[50px] overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                  <NotificationsActiveIcon className="" />
                </button>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/customer-access/login">
                <button className="mr-2 bg-indigo-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  Login
                </button>
              </Link>
              <Link to="/customer-access/signup">
                <button className="ml-2 bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  Sign-Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
