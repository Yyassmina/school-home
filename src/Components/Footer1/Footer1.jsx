import React from 'react';
import './Footer1.css';
import Logoj from "../../Assets/Logoj.png";
import BSOLogo from "../../Assets/BSOLogo.png";
import Cambridge from "../../Assets/Cambridge.png";
import cobis from "../../Assets/cobis.png"
const Footer1 = () => {
  return (
    <div className='footer1'>
      <div className="secContainer container grid">
       <div className='logoDiv1'>
        <div className="footerLogo">
        <img className='icon' src={BSOLogo} alt="Logo"></img>
        </div>
        </div>
        <div className='logoDiv2'>
        <div className="footerLogo">
        <img className='icon' src={Cambridge} alt="Logo"></img>
        </div>
        </div>
        <div className='logoDiv3'>
        <div className="footerLogo">
        <img className='icon' src={cobis} alt="Logo"></img>
        </div>
        </div>
        

        
         
      </div>

    </div>
  );
}

export default Footer1;