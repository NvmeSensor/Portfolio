import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Message from '../components/home/Message';

const Home = () => {
  return (
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <About />
        {/* <Contact /> */}
        <Message />
      </main>
  );
};

export default Home;