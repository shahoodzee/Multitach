import React from "react";

function Careers() {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-gray-700 rounded-lg shadow-lg text-left text-white">
      <h1 className="text-3xl mb-8 text-white">Join Our Team at Multitach</h1>
      <p className="mb-8">
        At Multitach, we're passionate about connecting skilled blue-collar
        workers with clients and making daily tasks easier for everyone. Join us
        in our mission to streamline services and create opportunities for
        skilled professionals.
      </p>
      <h2 className="text-2xl mb-6 text-red-800">Current Openings</h2>
      <ul className="mb-8">
        <li>Customer Service Representative</li>
        <li>Mechanic</li>
        <li>Plumber</li>
        <li>Electrician</li>
        <li>Blacksmith</li>
      </ul>
      <p>
        To apply for any of the positions listed above or to explore other
        opportunities, please send your resume and cover letter to{" "}
        <span className="text-blue-400">careers@multitach.com</span>.
      </p>
    </div>
  );
}

export default Careers;
