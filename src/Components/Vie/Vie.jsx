import React from 'react';
import "./Vie.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import bg_title_vieScolaire  from "../../Assets/bg_title_vieScolaire.png";
import sport from "../../Assets/sport.png";

const Vie = () => {
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
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
                infinite: true,
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1
    
            }
          }
        ]
      };
  return (

    <div className="vie">
    <div className="titlevie">
      <h1>VIE SCOLAIRE</h1>
      </div>
    <Slider {...settings} className="line1">
      
      <div className="slider1">
        <h4><span class="highlight">AC</span>TIVITÉS  <br />
        <span class="highlight">SP</span>ORTIVES</h4>
      </div>
      <div className="slider2">
        <h4><span class="highlight">AC</span>TIVITÉS <br />
        <span class="highlight">CU</span>LTURELLES</h4>
      </div>
      <div className="slider3">
        <h4><span class="highlight">AC</span>TIVITÉS <br /> 
        <span class="highlight">EX</span>TRASCOLAIRES</h4>
      </div>
      <div className="slider4">
        <h4><span class="highlight">AC</span>TIVITÉS <br />
        <span class="highlight">SO</span>CIALES</h4>
      </div>
      
      </Slider>
      <Slider {...settings} className="line2">
      <div className="slider5">
          <h4><span class="highlight">SO</span>RTIES <br />
          <span class="highlight">SC</span>OLAIRES</h4>
      </div>
      <div className="slider6">
          <h4><span class="highlight">VO</span>YAGE À <br />
          <span class="highlight">L'É</span>TRANGER </h4>
      </div>
      <div className="slider7">
          <h4><span class="highlight">SU</span>MMER  <br />
          <span class="highlight">CA</span>MP</h4>
      </div>
      <div className="slider8">
          <h4><span class="highlight">RO</span>BOTIQUE</h4>
      </div>
      </Slider>
</div>
   
  );
}

export default Vie