import React from 'react';
import './Footer.css';
import Logo from "../../Assets/Logo.png";
import Logoj from "../../Assets/Logoj.png";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className="foot">
    <div className='Footer'>
      <div className="secContainer container grid">
       <div className='logoDiv'>
        <div className="footerLogo">
        <img className='icon' src={Logoj} alt="Logo"></img>
        </div>

        <div className='socials flex'>
        <ImFacebook className='icon' />
        <AiFillInstagram className='icon' />
        <RiTwitterFill className='icon' />
        <FaLinkedinIn className='icon' />
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
             Liens
          </span>
            <li><a href='#'>Home</a></li>
            <li> <a href='#'>Careers</a></li>
            <li><a href='#'>ADMISSION</a></li>
            <li><a href='#'>About us</a></li>  
        </div>
        <div className='footerLinks'>
          <span className='linkTitle'>Contacts</span>
          <span className='adress'>Jeane D'Arc International School
            N°57 Boulevard Moulay Youssef Anfa Casablanca</span>
          <span className='email'>contact@jeannedarcinternational.ma</span>
          <span className='phone'>+212 522 22 01 70</span>
          
             
        </div>
        </div> 
      </div>

    </div>
    
    <footer>
        <div className='footer'>
        <div className='logo'>
            <img src={Logoj}></img>
        </div>
        
      <div className='sitemap'>
        <h2>SITEMAP</h2>
        <ul>
          <li><a href="/">Admissions</a></li>
          <li><a href="/">Galleries</a></li>
          <li><a href="/">Recrutement</a></li>
          <li><a href="/">Inscriptions</a></li>
          <li><a href="/">School Policies</a></li>
        </ul>
      </div>

      <div className='contact'>
        <h2>CONTACT</h2>
        <p> <i class="fa-solid fa-location-dot"> </i> Jeane D'Arc International School <br />
        N&deg;57 Boulevard Moulay Youssef 
        <br/> Anfa Casablanca</p>
        <p> <i class="fa-solid fa-phone"></i>  +212 522 22 01 70 <br/> +212 642 56 23 28</p>
        <p> <i class="fa-regular fa-envelope"></i> contact@jeannedarcinternational.ma</p>
      </div>


      <div className='suive'>
        <h2>SUIVEZ NOUS</h2>
        <div className='icons'>
         <i className="fab fa-facebook-square"></i>
         <i className="fab fa-instagram-square"></i>
         <i className="fab fa-youtube-square"></i>
         <i className="fab fa-linkedin"></i>
       </div>
      </div>
      </div>
    <div className='droit'>
      <p>ALL RIGHTS RESERVED &copy;2023 -JEANNE D'ARC INTERNATIONAL SCHOOL</p>
    </div>  
    </footer>
    </div>
  );
}

export default Footer;