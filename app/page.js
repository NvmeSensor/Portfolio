import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Services from '../components/home/Services';
import Message from '../components/home/Message';
import BuiltWith from '@/components/home/BuiltWith';
import Experience from '@/components/home/Experience';
import Achievements from '@/components/home/Achievements';

const Home = () => {
  return (
      <main>
        <Hero />
        <About />
        <Skills />
        <BuiltWith />
        <Experience />
        <Projects />
        <Services />
        <Achievements />
        <Message />
      </main>
  );
};

export default Home;