import React from "react";
import { Link } from "react-router-dom";

function CustomerCare() {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-lg shadow-lg text-left text-white">
      <center>
        <h1 className="text-3xl mb-8">Customer Care</h1>
      </center>
      <div className="customer-care-content">
        <p>
          Welcome to our Customer Care page at Multitach! We are dedicated to
          providing excellent support and assistance to our users. For any
          inquiries, concerns, or feedback, please don't hesitate to contact us
          through the following channels:
        </p>
        <ul className="mb-8">
          <li>
            Email: <span className="text-blue-500">support@multitach.pk</span>
          </li>
          <li>
            Phone: <span className="text-blue-500">+1234567890</span>
          </li>
          <li>Live Chat: Available on our website</li>
        </ul>
        <p>
          Our support team is available during business hours to assist you
          promptly. Additionally, you can visit our{" "}
          <Link to="/FAQ" className="text-blue-500">
            FAQ
          </Link>{" "}
          page for commonly asked questions.
        </p>
      </div>
    </div>
  );
}

export default CustomerCare;
