// components/Pro.js

import React from 'react';
import './Pro.css';
import image1 from '../images/s1.jpg'
const Pro = () => {
  return (
    <section className="Pr">
      <h1 className='too'><span className='to'>TESTIMONIALS</span></h1>

      <div className='Pro'>
      <p className='t'>“We use AHOM service to build an word-press template and
      they were very fast and <br></br>
shows a great communication skills and professionalism, i will work with them in future<br></br>
project for sure”
<br></br>
<h3 className='R' >R Al Naimi</h3>
CEO | Be Creative Agency 

</p>


      
      
      <div className="box">
        
        <img src={image1} alt="Image" className="image" />
      </div>
      </div>
    </section>
  );
};

export default Pro;
