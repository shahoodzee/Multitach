import './index.css'
import React, { useState } from 'react'
import Signup from '../../components/customerAccess/signup'
import Login from '../../components/customerAccess/login'

const CustomerAccess = () => {
  const [activeTab, setActiveTab] = useState('login')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className='form'>
      <ul className='tab-group'>
        <li
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => handleTabClick('signup')}
        >
          <a href='#signup'>Sign Up</a>
        </li>
        <li
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabClick('login')}
        >
          <a href='#login'>Log In</a>
        </li>
      </ul>

      <div className='tab-content'>
        <div
          id='signup'
          style={{ display: activeTab === 'signup' ? 'block' : 'none' }}
        >
          <Signup />
        </div>

        <div
          id='login'
          style={{ display: activeTab === 'login' ? 'block' : 'none' }}
        >
          <Login />
        </div>
      </div>
    </div>
  )
}

export default CustomerAccess
