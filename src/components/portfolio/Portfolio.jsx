import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/blog-page.webp'
import Bouken from '../../assets/Bouken-screenshot.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MERN Blog',
    description: 'MERN stack blog with authentication etc.',
    stack: ['React','NodeJS','Express','CSS','HTML'],
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Bouken,
    title: 'Bouken',
    description: 'A website presenting my Japanese adventures. Full stack website created using the MERN stack. Includes creative parallax designs, GSAP animations etc.',
    stack: ['React','NodeJS','Express','CSS','HTML'],
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG1,
    title: 'Dickie Melland',
    description: 'MERN stack website designed for a professional photographer, with integrated ecommerce.',
    stack: ['React','NodeJS','Express','CSS','HTML'],
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG1,
    title: 'Citifi',
    description: 'React website created for city branding company.',
    stack: ['React','CSS','HTML'],
    github: "https://github.com",
    demo: "https://github.com",
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, stack, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className='portfolio__item-text'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="stack__tools">{stack.map(tool => <div className='stack__tool'>{tool}</div>)}</div>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
