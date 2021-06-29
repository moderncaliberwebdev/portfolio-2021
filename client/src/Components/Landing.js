import React from 'react'

import '../css/Landing.css'

function Landing() {
  return (
    <div className='landing'>
      <header>
        <h1 className='landing__heading'> Modern Caliber Web Development</h1>
        <nav className='landing__nav'>
          <ul>
            <li className='landing__nav-options home'>Home</li>
            <li className='landing__nav-options'>My Work</li>
            <li className='landing__nav-options'>About Me </li>
            <li className='landing__nav-options'>Blog</li>
            <button className='landing__button'>Get a Free Quote</button>
          </ul>
        </nav>
      </header>

      <img
        src='/public/images/logo-vector.png'
        alt='Modern Caliber Logo Vector'
        className='landing__vector'
      />
      <div className='landing__welcome-container'>
        <span className='landing__welcome'>Hi! I am</span>
        <span className='landing__welcome orange'>Caleb Martin!</span>
      </div>
      <p className='landing__copy'>
        I am a Freelance Full Stack Javascript Developer. I create
        user-friendly, responsive websites that deliver, clear information with
        bold designs, which will engage your consumer and promote your services.
      </p>
      <button className='landing__button second'>Get a Free Quote</button>
      <h2 className='landing__section-heading projects-heading'>
        Featured Projects
      </h2>
      <span className='landing__subheading'>
        Clean and functional from design to development
      </span>
    </div>
  )
}

export default Landing
