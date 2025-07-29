import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import VendorLogin from '../components/forms/VendorLogin';
import VendorRegister from '../components/forms/VendorRegister';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';


const LandingPage = () => {
  const [login, setlogin] = useState(false);
  const [register, setRegister] = useState(false)
  const [firm, setFirm] = useState(false);
  const [product, setProduct] = useState(false);
  const loginHandler = () => {
    setlogin(true);
    setRegister(false)
    setProduct(false)
    setFirm(false);
  }
  const registerHandler = () => {
    setRegister(true);
    setlogin(false)
    setProduct(false)
    setFirm(false);
  }
  const firmhandler = () => {
    setFirm(true);
    setRegister(false)
    setlogin(false)
    setProduct(false)
  }
  const productHandler = () => {
    setProduct(true)
    setRegister(false)
    setlogin(false)
    setFirm(false);
  }
  return (
    <>
      <section className='landingSection'>
        <NavBar loginHandler={loginHandler} registerHandler={registerHandler} />
        <div className='sideBeside'>
          <SideBar firmHandler={firmhandler} productHandler={productHandler} />
          {login && <VendorLogin />}{/* <VendorLogin /> */}
          {register && <VendorRegister />} {/* <VendorRegister /> */}
          {firm && <AddFirm />}{/* <AddFirm /> */}
          {product && <AddProduct />}{/* <AddProduct /> */}
        </div>
      </section>
    </>
  );
};

export default LandingPage