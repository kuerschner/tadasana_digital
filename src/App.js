import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import 'flexboxgrid2';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
