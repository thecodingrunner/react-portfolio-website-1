import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/blog-page.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MERN Blog',
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG1,
    title: 'Bouken',
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG1,
    title: 'Dickie Melland',
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG1,
    title: 'Citifi',
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
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
