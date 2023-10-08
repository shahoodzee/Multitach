import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomerAccess from './containers/customerAccess'
import Home from './containers/home';
import PostTask from './containers/postTask/index';
import About from './containers/about/index';
import ContactUs from './containers/contactUs/index';
import Feedback from './containers/feedback/index';

const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customer-access/:action' element={<CustomerAccess />} />
          <Route path='/post-task' element={<PostTask />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
    </div>
  )
}

export default ProjectRoutes
