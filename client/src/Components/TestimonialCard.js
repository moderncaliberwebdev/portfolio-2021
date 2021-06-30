import React from 'react'

import '../css/TestimonialCard.css'

function TestimonialCard({ author, stars, text }) {
  return (
    <div className='test'>
      <h3 className='test__author'>{author}</h3>
      <div className='test__stars'>
        {stars >= 1 ? <img src='/public/images/star.png' alt='Rating' /> : ''}
        {stars >= 2 ? <img src='/public/images/star.png' alt='Rating' /> : ''}
        {stars >= 3 ? <img src='/public/images/star.png' alt='Rating' /> : ''}
        {stars >= 4 ? <img src='/public/images/star.png' alt='Rating' /> : ''}
        {stars >= 5 ? <img src='/public/images/star.png' alt='Rating' /> : ''}
      </div>
      <p className='test__text'>{text}</p>
    </div>
  )
}

export default TestimonialCard
