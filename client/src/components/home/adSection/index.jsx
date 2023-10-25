import React from "react";
import { useSpring, animated } from "react-spring";
import icon from "../../../images/electrician.jpg";
import { Link } from "react-router-dom";

const AdSection = () => {
  const iconStyle = {
    backgroundImage: `url(${icon})`,
  };

  // Define animations for your elements
  const containerProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 }, // Adjust the duration as needed
  });

  const logoProps = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
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
          className="flex justify-center md:justify-start items-center min-h-screen p-4 bg-gradient-to-l from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.9)]"
        >
          <div className="logo-container flex flex-col content-center md:content-start space-y-4 ml-40 justify-center md:justify-end items-center md:items-start pl-4 md:pl-52">
            <animated.span
              style={logoProps}
              className="font-bold text-3xl text-center md:text-left"
            >
              <p>You're a Specialist, and you</p>
              <p>have an outstanding</p>
              <p>Service to offer?</p>
            </animated.span>
            <animated.span
              style={buttonProps}
              className="space-y-4 md:space-x-4"
            >
              <Link to="/customer-access/signup">
                <button className="bg-violet-950 text-violet-300 self-center border border-violet-400 border-b-4 font-medium px-4 py-2 rounded-md overflow-hidden relative hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0 0 10px 10px rgba(0, 0, 0, 0.3)]"></span>
                  Become A Service Provider
                </button>
              </Link>
            </animated.span>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default AdSection;
