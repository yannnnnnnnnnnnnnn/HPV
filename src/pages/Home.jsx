import React from 'react'
import Layout from '../components/Layout'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import WhyWorkWithMe from './components/WhyWorkWithMe'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <WhatIDo />
      <Skills /> 
      <Experience/>
      <Projects /> 
      <WhyWorkWithMe />
      <Contact />
    </Layout>
  )
}

export default Home