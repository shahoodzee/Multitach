import React from "react";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring"; // Import the necessary components from react-spring
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
  {
    title: "Service 1",
    description: "Description for Service 1",
  },
  {
    title: "Service 2",
    description: "Description for Service 2",
  },
  {
    title: "Service 3",
    description: "Description for Service 3",
  },
  {
    title: "Service 4",
    description: "Description for Service 4",
  },
  {
    title: "Service 5",
    description: "Description for Service 5",
  },
];

const ServiceSection = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  const slideProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1500 },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container p-4 px-40 relative">
        <h2 className="font-bold text-3xl">Popular Services</h2>
        <div className="popular-services-container mt-4">
          <Slider {...settings}>
            {servicesData.map((service, index) => (
              <animated.div
                key={index}
                className="px-4 py-2"
                style={slideProps}
              >
                <div
                  className="bg-slate-600 p-4 rounded-lg shadow-md"
                  style={{ minWidth: "300px" }}
                >
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-300">{service.description}</p>
                  <div className="mt-4 space-x-2">
                    <button className="bg-indigo-950 text-violet-400 border border-violet-400 px-4 py-2 rounded-md">
                      Order
                    </button>
                    <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-md">
                      View More
                    </button>
                  </div>
                </div>
              </animated.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
