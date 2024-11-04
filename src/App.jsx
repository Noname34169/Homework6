import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import About from './components/About/About'
import Catalog from './components/Catalog/Catalog'
import Hero from './components/Hero/Hero'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <About />
    <Catalog />
    <Hero />
    <Wrapper />
    <Main />
    <Section />
    <Footer />
    </>
  )
}

export default App