import React from "react";
import { useSpring, animated } from "react-spring";
import "./index.css";
import icon from "../../../images/landing-page.jpg";
import { Link } from "react-router-dom";

const TopSection = () => {
  const iconStyle = {
    backgroundImage: `url(${icon})`,
    backgroundPosition: "0px -150px",
  };

  // Define animations for your elements
  const containerProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 }, // Adjust the duration as needed
  });

  const logoProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1500 },
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  return (
    <animated.div style={containerProps}>
      <div
        className="top-section bg-your-image bg-cover min-h-screen"
        style={iconStyle}
      >
        <animated.div
          style={logoProps}
          className="flex justify-center md:justify-end items-center min-h-screen p-4 bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.9)]"
        >
          <div className="logo-container flex flex-col content-center md:content-start space-y-4 justify-center md:justify-end items-center md:items-end pr-4 md:pr-52">
            <animated.h1
              style={logoProps}
              className="logo-heading text-4xl md:text-6xl font-extrabold text-center md:text-left"
            >
              MULTITACH
            </animated.h1>
            <animated.span
              style={logoProps}
              className="flex flex-col justify-center md:justify-start items-center md:items-start font-bold text-2xl text-center md:text-left"
            >
              <p>Find the right specialist</p>
              <p>For the job</p>
            </animated.span>
            <animated.span
              style={buttonProps}
              className="space-y-4 md:space-x-4"
            >
              <Link to="/post-task">
                <button className="bg-violet-950 text-violet-300 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Post Task
                </button>
              </Link>
              <Link to="/worker/signup">
                <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Earn Money
                </button>
              </Link>
            </animated.span>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default TopSection;
