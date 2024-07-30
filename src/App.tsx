import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Subscription from './components/Subscription';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero2Video from './components/Hero2Video';
import CaseStudy from './components/CaseStudy';
import CarouselProducts from './components/CarouselProducts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Hero2Video />
      <CaseStudy />
      <Services />
      <CarouselProducts />
      <Subscription />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
