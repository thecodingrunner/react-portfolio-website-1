import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a id='#' href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><IoHomeOutline /></a>
      <a id='#about' href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><LuUser2 /></a>
      <a id='#experience' href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><MdOutlineLibraryBooks /></a>
      <a id='#portfolio' href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}><CgWebsite /></a>
      <a id='#contact' href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><FaRegMessage /></a>
    </nav>
  )
}

export default Nav
