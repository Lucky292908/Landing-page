import React from 'react';
import './Test.css'; // Import your CSS file
import image1 from '../images/b4.jpg';

const Test = () => {
  return (
    <section className="container">
      <div className="box1">
        <img src={image1} alt="Image" className="im" />
       <div className='cr'> <div className="card">
          <p><h1 className='cl'>WHO WE ARE
AHOM</h1> Technologies Private Limited is a specialised IT solutions
company based out at Gurgaon, India. We provide high quality
professional software services to the clients residing across the
globe. Our experts have been working with the clients of India as
well as from international origin including USA, UK, and Australia.</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<h4 className='pr'> Read More</h4>

        </div></div>
      </div>
    </section>
  );
};

export default Test;
