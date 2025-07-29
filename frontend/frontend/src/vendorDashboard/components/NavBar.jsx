import React from 'react'
import './App.css'
import '../pages/LandingPage.jsx'
const NavBar = ({ loginHandler, registerHandler }) => {
  return (
    <div className='navSection'>
      <div className='company'>
        Vendor Dashboard
      </div>
      <div className='userAuth'>
        <span onClick={loginHandler} style={{ cursor: 'pointer' }}>Login</span> <br />
        <span onClick={registerHandler} style={{ cursor: 'pointer' }} >Register</span>
      </div>
    </div>

  );
};

export default NavBar