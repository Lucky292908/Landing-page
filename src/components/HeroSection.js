// components/HeroSection.js
import React from 'react';
import './HeroSection.css';  // Import your CSS file

import image1 from '../images/a9.jpg';
import image2 from '../images/h.jpg';
import image3 from '../images/k.jpg';

import image4 from '../images/r.jpg';
import image5 from '../images/b9.jpg';
import image6 from '../images/o.jpg';
import image7 from '../images/d.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2>Explore <span className='D'>Our Solutions</span></h2>
      <div><h1 className='E'>By Industry</h1></div>
      <div className="image-container">
        <div style={{ backgroundImage: `url(${image1})` }}>
        <h1 className='M' color='white'>Health</h1>
        <p className='Mo' >Revitalize your Healthcare
Industry with our Digital Suite
Solutions. We offer secure
websites, healthcare software,
targeted digital marketing
services,
<br></br>
<h4 className='ho'>READ MORE</h4></p>
        </div>
        <div style={{ backgroundImage: `url(${image2})` }}>
        <h1 className='M' color='white'>Infrastructure</h1>
        <p className='Mo' >Modernize your Infrastructure
Management with Ahom Tech
Integrated Solutions. Our
websites, software, data-driven
digital marketing,
<br></br>
<h4 className='ho'>READ MORE</h4>
</p>
        </div>
        <div style={{ backgroundImage: `url(${image3})` }}>
        <h1 className='M' color='white'>Education</h1>
        <p className='Mo' >Elevate Education with Ahom
Tech Comprehensive IT
Solutions. We are crafting
engaging websites,
cutting-edge software,
<br></br>
<h4 className='ho'>READ MORE</h4></p>
        </div>
        
      </div>
      <div  className='S'><div className='H' style={{ backgroundImage: `url(${image4})` }}><h1><pre className='P'>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            Cloud
          
  </pre></h1></div>
          <div className='H'tex style={{ backgroundImage: `url(${image5})` }} ><h1 t><pre className='P'>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            Block-Chain
            
 </pre></h1></div></div>
        <div  className='S'><div className='H' style={{ backgroundImage: `url(${image6})` }}><h1><pre className='P'>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
           IoT &
           <br></br>
Digital Engineering  </pre></h1></div>
          <div className='H'tex style={{ backgroundImage: `url(${image7})` }} ><h1 t><pre className='P'>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
             AI-Artificial
             <br></br>
Intelligence </pre></h1></div></div>
    </section>
  );
};

export default HeroSection;
