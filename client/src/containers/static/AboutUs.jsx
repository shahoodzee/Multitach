import React from "react";
import "./AboutUs.css";
import KhursandImage from "../../images/Khursand_Sohail_Pic.jpg";
import TahaImage from "../../images/Taha Profile Pic.jpg";
import TeamMemberCard from "./TeamMemberCard";
function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-multitach">
        <center>
          <h1 className="hello">About Multitach</h1>
        </center>
        <p>
          Multitach is a platform dedicated to connecting skilled blue-collar
          workers, such as electricians, plumbers, mechanics, and more, with
          clients seeking their expertise for various daily tasks and services.
        </p>
        <p>
          Our platform simplifies the process of finding skilled professionals
          for tasks like repairing appliances (e.g., washing machines), fixing
          automobiles, handling home maintenance, and other essential services.
          Whether it's a sudden breakdown or routine maintenance, Multitach aims
          to bridge the gap between skilled workers and clients in need.
        </p>
        <p>
          We understand the importance of reliable, efficient, and timely
          service, which is why Multitach focuses on providing a user-friendly
          interface for both workers and clients to streamline the hiring
          process. Our goal is to make finding skilled professionals and getting
          tasks done hassle-free and convenient for everyone involved.
        </p>
        <p>
          Join Multitach today to access a diverse pool of skilled workers or to
          offer your expertise in providing quality services.
        </p>
      </div>

      <div className="team-members">
        <center>
          <h2>Our Team</h2>
        </center>
        <div className="team-members-list">
          <div className="member-card">
            <center>
              <TeamMemberCard
                name="Khursand Sohail Iqbal"
                email="sohailkhursand02@gmail.com"
                phoneNumber="+92 305-9544672"
                image={KhursandImage}
              />
            </center>
          </div>
          <div className="member-card">
            <center>
              <TeamMemberCard
                name="Taha Sohail "
                email="sohailkhursand02@gmail.com"
                phoneNumber="+92 305-9544672"
                image={TahaImage}
              />
            </center>
          </div>
          <div className="member-card">
            <center>
              <TeamMemberCard
                name="Shahood Bin Amir"
                email="sohailkhursand02@gmail.com"
                phoneNumber="+92 305-9544672"
                image="Khursand_Sohail_Pic.jpg"
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
