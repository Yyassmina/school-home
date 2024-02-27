import React from 'react';
import './Cycle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import primary from "../../Assets/primary.png";
import early from "../../Assets/early.png";
import secondary from "../../Assets/secondary.png";
import upper from "../../Assets/upper.png";
import Vectorleft from "../../Assets/Vectorleft.png";
import Vectorright from "../../Assets/Vectorright.png";


function Cycle() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      {
        breakpoint: 768,
        settings: {
            infinite: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
          

        }
      }
    ]
  };
  return (
     <div className='cycle'>
        <div className="titlecycle"><img className='vect1' src={Vectorleft} />
        <h1>Nos Cycles</h1><img className='vect2' src={Vectorright} />
        </div>
    <Slider className="slider" {...settings}>
       <div className="cycle1">
       <h3>Crèche <br/> Maternelle</h3>
      </div>

      <div className="cycle2">
       <h3> Primaire</h3>
      </div>

      <div className="cycle3">
       <h3>Collège </h3>
      </div>

      <div className="cycle4">
       <h3>Lycée</h3>
      </div>

      
    </Slider>
    </div>
   
  );
}

export default Cycle;
