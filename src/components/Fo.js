// components/Footer.js

import React from 'react';
import './Fo.css';
import image1 from '../images/u.png';
import image3 from '../images/b7.png';
import image4 from '../images/b8.png';
import image5 from '../images/y.png';
import image6 from '../images/n.png';

const Footer = () => {
  return (
    <footer className="fo">
        <h1 className='Vo'>Our<span className='Co'>Clients</span> </h1>
      <div className="foot">
        {/* Circular buttons */}
        <div className="circle-button"><img src={image6}></img></div>
        
        {/* Image boxes with red borders */}
        <div className="image-box" style={{ border: '2px solid red' }}>
          <img src={image1} alt="Image 1" />
        </div>
        <div className="image-box" style={{ border: '2px solid red' }}>
          <img src={image1} alt="Image 2" />
        </div>
        <div className="image-box" style={{ border: '2px solid red' }}>
          <img src={image3} alt="Image 3" />
        </div>
        <div className="image-box" style={{ border: '2px solid red' }}>
          <img src={image4} alt="Image 4" />
        </div>
        <div className="image-box" style={{ border: '2px solid red' }}>
          <img src={image5} alt="Image 5" />
        </div>
        
        {/* Circular buttons */}
        <div className="circle-button"><img src={image6}></img></div>
      </div>
    </footer>
  );
};

export default Footer;
