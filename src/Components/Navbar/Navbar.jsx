import React, { useState } from 'react';
import './Navbar.css';
import {BiLogoMediumOld} from 'react-icons/bi'
import { FaWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Logo from "../../Assets/Logo.png"

const Navbar = () => {
  //  state to track and update navbar
  const [navBar , setNavBar] = useState("nav");
  // function to show navbar
  const showNavBar = ()=>{
    setNavBar("nav showNavbar");
  }
  // function to remove navbar
  const removeNavBar = ()=>{
    setNavBar("nav");
  }
  return (
    <div className='navBar'>
      <div className='logoDiv'>
      <img src={Logo} alt="Logo"></img>
      
      </div>
      <div className={navBar}>
      <ul>
      <li className='navlist'><a href="./Accueil.js">Accueil</a></li>
      <li className='navList'><a href="/Notre École">Notre École</a></li>
      <li className='navList'><a href="/Académique">Académique</a></li>
      <li className='navList'><a href="/Admissions">Admissions</a></li>
      <li className='navList'><a href="/Vie Scolaire">Vie Scolaire</a></li>
      <li className='navList'><a href="/Actualités">Actualités</a></li>
      <li className='navList'><a href="/Contactez nous">Contactez nous</a></li>
                
            </ul>
            {/* icon remove navbar */}
            <FaWindowClose  className='icon closeIcon' onClick={removeNavBar} />
      </div>
          <button className="signUpBtn btn"> Inscription</button>
           {/* icon toggle  navbar */}
           <FaBars  className='icon menuIcon' onClick={showNavBar}/>
          
  
   </div>
  );
}

export default Navbar;