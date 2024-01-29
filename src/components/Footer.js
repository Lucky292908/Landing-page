// components/Footer.js
import React from 'react';
import './Footer.css';  // Import your CSS file
import y from '../images/y.png';
import logo1 from '../images/a.png';
import logo2 from '../images/s.png';
import logo3 from '../images/b.png';
import logo4 from '../images/t.png';
import z from '../images/z.png';
import logo5 from '../images/v.png';
import logo6 from '../images/w.png';
import logo7 from '../images/b6.png';
import logo8 from '../images/i.png';
import logo9 from '../images/j.png';
import logo10 from '../images/l.png';
import logo11 from '../images/m.png'
import logo12 from '../images/f.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={y} alt="Company Logo" />
          <p>We are a recognized startup working<br></br> towards innovation and creation of<br></br> new products and services by the <br></br>Department of Industrial Policy and <br></br>Promotion, Ministry of Commerce and<br></br> Industry, Government of India.</p>
          <div className='p4'>
         <img src={logo5}></img>
         <img src={logo6}></img>
         <img src={logo10}></img>
         <img src={logo7}></img>
         


          </div>
        </div>
        <div className="footer-section">
          <h3>India Sales</h3>
          <p>+91-124 4294496</p>
          <p>+91-9873904496</p>
          <p>401, Spaze Platinum Tower,<br></br> Sector 47, Sohna Road,<br></br> Gurgaon-122001</p>
          
          <p>sales@ahomtech.com</p>
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-section">
          <h3>US Sales</h3>
          <p>sales@ahomtech.com</p>
          <p>amit.kumar.pandey</p>
          <h3>Certificate of Registration</h3>
          <div className="logo-container">
            <div>
              <img src={logo1} alt="Logo 1" />
              <img src={logo2} alt="Logo 2" />
            </div>
            <div>
              <img src={logo3} alt="Logo 3" />
              <img src={logo4} alt="Logo 4" />
            </div>
          </div>
        </div>
        
        <div className="footer-section"></div>
      </div>
     
      <div className="footer-bottom">
        
        <p>Copyright &copy; 2023. All Rights Reserved AHOM Technologies Private Limited, All content on this website is subject to copyright laws. Illegal copying, duplication, plagiarism, and commercial use without our permission will be severely punished by law</p>
      </div>
    </footer>
  );
};

export default Footer;
