import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Cursor from './components/cursor/Cursor'

const App = () => {
  return (
    <>
      <Cursor />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
