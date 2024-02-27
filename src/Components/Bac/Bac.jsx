import React from 'react'
import "./Bac.css";
import bg_bac from '../../Assets/bg_bac.png';
import BAC2023 from '../../Assets/BAC2023.png'
const Bac = () => {
  return (
    <div className='Bac'>
    <img className='bgbac' src={BAC2023} />
    
    <p>L&rsquo;enseignement trilingue adopté  par notre établissement aide<br />
    nos él èves à  développer une meilleure sensibilité <br />
    communicative dans un environnement plurilingue et <br />
    multiculturel. <br />
    Jeanne D&rsquo;Arc Trilingue School a toujours veillé a incuqué à  ses <br />
    apprenants, l&rsquo;adhésion aux valeurs universelles et cultive en <br />
     eux l&rsquo;art de la cihabitation avec les citoyens du monde.
    </p>

    <div className='titlebac'><h1><span className="motU">UN ENSEIGNEMENT </span>
    <span className="motT">TRILINGUE  </span><br />
    <span className="motU"> D'EXCELLENCE DE </span>  LA CRÈCHE AU LYCÉE</h1>
     </div>
</div>

  )
}

export default Bac