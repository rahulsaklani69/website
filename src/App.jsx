import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Speciality from './components/Speciality';
import Features from './components/Features';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Speciality />
        <Features />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
