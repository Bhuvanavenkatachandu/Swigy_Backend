import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'

const LandingPage = () => {

  const[showLogin,setShowLogin]=useState(false);
  const[showRegister,setShowRegister]=useState(false);
  const[showAddFirm,setShowAddFirm]=useState(false);
  const[showAddProducts,setShowAddProducts]=useState(false);
  const[showWelcome,setShowWelcome]=useState(true);

  const showAddProductsHandller =()=>{
    setShowAddProducts(true);
    setShowAddFirm(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowWelcome(false);
  }
  const showAddFirmHandler =()=>{
    setShowAddFirm(true);
    setShowAddProducts(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowWelcome(false);
  }

  const showLoginHandler =()=>{
    setShowLogin(true);
    setShowAddProducts(false);
    setShowAddFirm(false);
    setShowRegister(false);
    setShowWelcome(false);
  }

  const showWelcomeHandler =()=>{
    setShowLogin(false);
    setShowAddProducts(false);
    setShowAddFirm(false);
    setShowRegister(false);
    setShowWelcome(true);
  }

  const showRegisterHandler =()=>{
    setShowRegister(true);
    setShowAddProducts(false);
    setShowAddFirm(false);
    setShowLogin(false);
    setShowWelcome(false);
  }

  return (
    <>
    <section className="landing-section">
        <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler} />
        <div className="collectionSection">
        <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductsHandller={showAddProductsHandller}/>
        {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
        {showRegister && <Register showLoginHandler={showLoginHandler}/>}
        {showAddFirm && <AddFirm />}
        {showAddProducts && <AddProducts />}
        {showWelcome && <Welcome />}
        </div>
    </section>
    </>
  )
}

export default LandingPage