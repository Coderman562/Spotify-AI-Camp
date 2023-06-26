import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Masthead from './Masthead';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const previewUrl = 'https://p.scdn.co/mp3-preview/5d4c6f0b903074f5cc6cef58d2c2f67abb179d75?cid=f74d125a75774bb886fea891b2324a1a';
  const imageUrl = 'https://i.scdn.co/image/ab67616d0000b2732aa56b66dfc0e631ceca0ce2';

  return (
    <>
      <Navbar />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
