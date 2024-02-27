import React from 'react';
import "./Middle.css";
import Play from "../../Assets/Play.png";
import directeur from "../../Assets/directeur.jfif";

const Middle = () => {
  return (
    <div className='middle'>
        
      <div className='part'>
        <p><h4>MOT DU DIRECTEUR</h4><br />
        Chers parents,<br />
        Fondé en 1921, notre établissement scolaire 
         perpétue une tradition marquée <br /> par la quête de
         l&rsquo;excellence dans tous nos projects. Nous proposons
         une  <br /> pédagogie éducative basee sur la réussite,
         la responsabilisation et la confiance <br />
         afin de préparer, activement, nos élèves  au monde de demain. 
        <button onclick="showMore()" className='lire'> Lire la suite </button>
        </p>
        <div className='direct' > 
        <img className='imgmiddle' src={directeur}></img><a class="play" href="/Inscriptions">
        <img src={Play} class="icon" /> PLAY VIDEO </a>
        </div>
      </div> 
      
      <div className='direct1' > 
        <img className='imgmiddle' src={directeur}></img> <a class="play" href="/Inscriptions">
        <img src={Play} class="icon" /> PLAY VIDEO </a>
        </div>
    </div>
    
  )
}

export default Middle