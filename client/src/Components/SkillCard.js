import React from 'react'

import '../css/SkillCard.css'

function SkillCard({ img, heading, text }) {
  return (
    <div className='skillcard'>
      <img src={img} alt='Skill Card Image' className='skillcard__img' />
      <h3 className='skillcard__heading'>{heading}</h3>
      <p className='skillcard__text'>{text}</p>
    </div>
  )
}

export default SkillCard
