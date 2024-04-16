import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/finnmoffett-nobackground.png'
import HeaderSocials from './HeaderSocials'
// import {motion} from 'framer-motion'

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "220%",
//     transition: {
//       repeat: Infinity,
//       duration: 20,
//     },
//   },
// };

//  variants={sliderVariants} initial="initial" animate="animate"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Finn Moffett</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA /> 
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me"/>
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
