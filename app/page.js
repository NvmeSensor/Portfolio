import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Message from '../components/Message'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Message />
      <Footer />
    </section>
  )
}

export default Home