import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Finn Moffett. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
