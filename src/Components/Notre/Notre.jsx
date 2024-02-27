import React from 'react';
import "./Notre.css";
import bg_notre from '../../Assets/bg_notre.png';
import Vectorleft from '../../Assets/Vectorleft.png';
import Vectorright from '../../Assets/Vectorright.png';
import imagenotre from '../../Assets/imagenotre.png';
import HoverText from '../../Assets/HoverText.png';


function NotreCharte() {
  return (

      <div className='charte'>
       
        <div className='vector'>
        <img className='vector1' src={Vectorleft} />
        <h1>NOTRE CHARTE</h1><img className='vector2' src={Vectorright} />
        <img className='imageCharte' src={imagenotre} />
      </div>

    <div className='hovercharte'>
         <div className='textcharteL'>
          <p>Assurer à l'enfant une sécurité   <br />affective et physique</p>
          <p>Respecter les rythmes  <br />et repères de l'enfant</p>
          <p>Garantir à chacun  <br />des soins individualisés</p>
          </div>
          <div className='textcharteR'>
          <p>Favoriser l'éveil   <br />et l'autonomie de l'enfant</p>
          <p>Soutenir l'enfant dans <br />ses émotions et ses désirs</p>
          <p>Situer les parents  <br />au centre de notre projet</p>
          </div>
      </div>
      </div>
    
    
  );
}

export default NotreCharte;
