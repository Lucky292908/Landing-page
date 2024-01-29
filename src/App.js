import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pro from './components/Pro';
import Fo from './components/Fo';

import Test from './components/Test';

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <HeroSection />
      <Hero></Hero>
      <Pro></Pro>
     <Test></Test>
      <Fo></Fo>
      
      <Footer />
      
    </div>
  );
};

export default App;
