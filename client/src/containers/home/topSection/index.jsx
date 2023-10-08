import React from "react";
import "./index.css";
import icon from "../../../images/Work only with the best.png";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <div className="top-section flex flex-row justify-evenly items-center p-4">
      <div className="icon">
        <img
          className="object-cover"
          src={icon}
          alt="Work only with the best"
        />
      </div>
      <div className="logo-container flex flex-col content-start space-y-4">
        <h1 className="logo-heading text-6xl font-extrabold">MULTITACH</h1>
        <span className="flex flex-col justify-start items-start font-bold text-2xl">
          <p>Find the right specialist</p>
          <p>For the job</p>
        </span>
        <span className="space-x-4">
          <Link to="/post-task">
            <button className="bg-violet-950 text-violet-300 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group p-2">
              <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Post Task
            </button>
          </Link>
          <Link to="/customer-access/signup">
            <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Earn Money
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TopSection;
