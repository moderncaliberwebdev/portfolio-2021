import React from 'react'

import '../css/ProjectCard.css'

function ProjectCard({ logo, heading, text }) {
  return (
    <div className='projectcard'>
      <img src={logo} alt='Project Logo' className='projectcard__logo' />
      <h3 className='projectcard__heading'>{heading}</h3>
      <p className='projectcard__text'>{text}</p>
      <button className='projectcard__button'>Check It Out</button>
    </div>
  )
}

export default ProjectCard
