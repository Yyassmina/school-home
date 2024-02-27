import React from 'react';
import './Home.css';
import img_1 from '../../Assets/img_1.webp';

const Home = () => {
  return (
    <div className='Home'>
      <div className="videoBg">
        <img src={img_1}></img>
      </div>
      <div className='sectionText'>
      <h1>BIENVENUE À  <br /> JEANNE D'ARC  <span className="mot">TRILINGUE</span> SCHOOL</h1>
      <h3>la quête d'excellence</h3>
      </div>
   
      

    </div>
  );
}

export default Home;