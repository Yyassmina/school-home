import React from 'react'
import './Raison1.css';
import bg_yellow_raison from "../../Assets/bg_yellow_raison.png";
import image_raison from "../../Assets/image_raison.png";
import Vectorleft from "../../Assets/Vectorleft.png";
import Vectorright from "../../Assets/Vectorright.png";
import bgraison5 from "../../Assets/bgraison5.png";
import bgraison2 from "../../Assets/bgraison2.png";
import bgraison3 from "../../Assets/bgraison3.png";
import bgraison4 from "../../Assets/bgraison4.png";
import bgRaison1 from "../../Assets/bgRaison1.png";
import bgraison6 from "../../Assets/bgraison6.png";
import raison1 from "../../Assets/raison1.png";
import raison2 from "../../Assets/raison2.png";
import raison4 from "../../Assets/raison4.png";
import raison5 from "../../Assets/raison5.png";
import raison6 from "../../Assets/raison6.png";
import { BsPlusCircleDotted } from "react-icons/bs";

const Raison1 = () => {
  return (
    <div className="totalraison">
    <div className='carosel'>
      <h2>6 Raisons pour choisir Jeanne D'Arc International School</h2>
    <div className="box">
    <img src={bgraison5}/>
       <p>100 ans d'histoire et d'expertise en éducation</p>
    </div>
    <div className="box">
    <img src={bgraison2}/>
    <p>une pédagogie bienviellante et innovative</p>
    </div>
    <div className="box">
    <img src={bgraison3}/>
    <p>une éducation du 21<sup>ème</sup> siècle alliant excellence et épanouissement</p>
    </div>
    <div className="box">
    <img src={bgraison4}/>
    <p>des valeurs humaines au coeur de l'éducation</p>
    </div>
    <div className="box">
        <img src={bgraison5}/> 
        <h3><BsPlusCircleDotted className="icon"/>Voir Plus</h3>
          </div>
    </div>


    <div className='choisir'>
          <div className='milieu'>
          <img className='vector3' src={Vectorleft} />
          <h1>6 RAISONS <br /> POUR NOUS CHOISIR</h1>
          <img className='vector4' src={Vectorright} />
          <img className='imageRaison' src={image_raison} />
        </div>
  
      <div className='raison'>
        <div className='raisonL'>
          <div className='p1'><img src={raison1}  class="icon1" />
            <p className='raison1'> 100 ans d'histoire <br />  
            et d'expertise <br /> en éducation</p>
          </div>
          <div className='p2'><img src={raison2}  class="icon2" />
            <p className='raison2'> une pédagogie <br />  
            bienviellante <br /> et innovative</p>
          </div>
          <div className='p3'><img src={raison2}  class="icon3" />
            <p className='raison3'> une éducation du 21<sup>ème</sup>   
            siècle alliant excellence et épanouissement</p>
          </div> 
        </div>

        <div className='raisonR'>
          <div className='p4'><img src={raison4}  class="icon4" />
            <p className='raison4'> des valeurs humaines   
            au coeur de l'éducation</p>
          </div>
          <div className='p5'><img src={raison5}  class="icon5" />
            <p className='raison5'> 100 ans d'histoire <br />  
            et d'expertise <br /> en éducation</p>
          </div>
          <div className='p6'><img src={raison6} class="icon6" />
            <p className='raison6'> 100 ans d'histoire <br />  
            et d'expertise <br /> en éducation</p>
          </div> 
        </div>  
        </div>
        </div>
    </div>
  )
}

export default Raison1