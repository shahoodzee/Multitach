import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer"; // Import the necessary components
import TopSection from "../../components/home/topSection/index";
import ServiceSection from "../../components/home/serviceSection";
import AdSection from "../../components/home/adSection";

const Home = () => {
  const transitionConfig = { duration: 1000 };

  // Use the useInView hook to track when the sections are in the viewport
  const [topSectionRef, topSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  const [serviceSectionRef, serviceSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [adSectionRef, adSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Define animation properties
  const topSectionProps = useSpring({
    opacity: topSectionInView ? 1 : 0,
    from: { opacity: 0 },
    config: transitionConfig,
  });

  const serviceSectionProps = useSpring({
    opacity: serviceSectionInView ? 1 : 0,
    from: { opacity: 0 },
    config: transitionConfig,
  });

  const adSectionProps = useSpring({
    opacity: adSectionInView ? 1 : 0,
    from: { opacity: 0 },
    config: transitionConfig,
  });

  return (
    <div>
      <div ref={topSectionRef}>
        <animated.div style={topSectionProps}>
          <TopSection />
        </animated.div>
      </div>
      <div ref={serviceSectionRef}>
        <animated.div style={serviceSectionProps}>
          <ServiceSection />
        </animated.div>
      </div>
      <div ref={adSectionRef}>
        <animated.div style={adSectionProps}>
          <AdSection />
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
