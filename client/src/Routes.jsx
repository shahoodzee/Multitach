import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import CustomerAccess from "./containers/customerAccess";
import Home from "./containers/home";
import PostTask from "./containers/postTask/index";
import About from "./containers/about/index";
import ContactUs from "./containers/contactUs/index";
import Feedback from "./containers/feedback/index";
import TaskContainer from "./containers/task";
import Profile from "./containers/profile";
import WorkerSignup from "./containers/worker/signup";
import WorkerLogin from "./containers/worker/login";
import WorkerTask from "./containers/worker/task";
import AboutUs from "./containers/static/AboutUs";
import Careers from "./containers/static/Carrers";
import CustomerCare from "./containers/static/CustomerCare";
import TermsAndConditions from "./containers/static/TermsAndConditions";
import FAQ from "./containers/static/FAQ";

const ProjectRoutes = () => {
  const isAuthenticated = !!Cookies.get("token");
  console.log(`Token: ${Cookies.get("token")}`);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/customer-care" element={<CustomerCare />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="/worker/signup" element={<WorkerSignup />} />
      <Route path="/worker/login" element={<WorkerLogin />} />
      <Route path="/worker/task" element={<WorkerTask />} />
      <Route path="/post-task" element={<PostTask />} />

      {isAuthenticated ? (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/task" element={<TaskContainer />} />
          <Route path="/feedback" element={<Feedback />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/customer-access/login" />} />
      )}
      {!isAuthenticated ? (
        <Route path="/customer-access/:type" element={<CustomerAccess />} />
      ) : (
        <Route path="*" element={<Navigate to="/profile" />} />
      )}
    </Routes>
  );
};

export default ProjectRoutes;
