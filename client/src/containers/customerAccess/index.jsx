import "./index.css";
import React from "react";
import Signup from "../../components/customerAccess/signup";
import Login from "../../components/customerAccess/login";
import { useParams } from "react-router-dom";

const CustomerAccess = () => {
  const { type } = useParams();

  return (
    <div className="form">
      <div className="tab-content">
        <div
          id="signup"
          style={{ display: type === "signup" ? "inline" : "none" }}
        >
          <Signup />
        </div>

        <div
          id="login"
          style={{ display: type === "login" ? "block" : "none" }}
        >
          <Login />
        </div>
      </div>
    </div>
  );
};

export default CustomerAccess;
