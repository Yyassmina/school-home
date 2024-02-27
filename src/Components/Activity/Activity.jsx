import React from 'react';
import './Activity.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sport from "../../Assets/sport.png";
import culturelles from "../../Assets/culturelles.png";
import extra from "../../Assets/extra.png";
import robotique from "../../Assets/robotique.png";



function Activity() {
  var settings = {
    dots: true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
            infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  };
  return (
    <div className="activity">
        
      <Slider {...settings}>
      <div className='box1'>
          {/* <h3>1</h3> */}
          <img src={sport}/>
          <h3>ACTIVITÉS  <br/> SPORTIVES</h3>
        </div>
        <div className='box2'>
        <img src={culturelles}/>
          <h3>ACTIVITÉS  <br/> CULTURELLES</h3>
        </div>
        <div className='box3'>
        <img src={extra}/>
          <h3> ACTIVITÉS  <br/> EXTRASCOLAIRES</h3>
        </div>
        <div className='box4'>
        <img src={robotique}/>
          <h3>ROBOTIQUE</h3>
        </div>
        
      </Slider>
    </div>
  );
}

export default Activity;
