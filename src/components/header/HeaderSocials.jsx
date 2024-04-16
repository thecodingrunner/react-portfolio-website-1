import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="__blank"><FaLinkedin /></a>
      <a href="https://github.com" target="__blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
