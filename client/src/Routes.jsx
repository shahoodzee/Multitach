import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerAccess from "./containers/customerAccess";
import Home from "./containers/home";
import PostTask from "./containers/postTask/index";
import About from "./containers/about/index";
import ContactUs from "./containers/contactUs/index";
import Feedback from "./containers/feedback/index";
import TaskContainer from "./containers/task";

const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-access/:type" element={<CustomerAccess />} />
        <Route path="/task" element={<TaskContainer />} />
        <Route path="/post-task" element={<PostTask />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default ProjectRoutes;
