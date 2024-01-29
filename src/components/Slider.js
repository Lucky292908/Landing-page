// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a1 from '../images/a1.jpg';
import d from '../images/d.jpg';
import a3 from '../images/a3.jpg';

import './Slider.css';

const images = [a1, d, a3];

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className='B'>
      
      {images.map((image, index) => (
        <div className='C' key={index}>
          <img src={image} alt={`Slide ${index + 1}`} ></img>
         
          <div className='text-overlay'>
          
           
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
