import React from 'react'

import '../css/Landing.css'

import ProjectCard from './ProjectCard'

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
      <div className='landing__project-container'>
        <ProjectCard
          logo='/public/images/timescripture.png'
          heading='TimeScripture'
          text='TimeScripture is a web app that is able to instantly find any verse of the Bible if you give it a reference'
        />
        <ProjectCard
          logo='/public/images/redoak.png'
          heading='Red Oak Landscaping'
          text='Red Oak Landscaping is a landscaping business in Denver, PA. They specialize in hardscaping, landscaping, and seeding.'
        />
        <ProjectCard
          logo='/public/images/destefano.png'
          heading='Destefano Enterprises'
          text='TimeScripture is a web app that is able to instantly find any verse of the Bible if you give it a reference'
        />
      </div>
      <p className='projects__subhead'>Want to see more of my work?</p>
      <button className='projects__button'>
        Explore Full List of Projects
      </button>
      <h2 className='landing__section-heading'>Who am I?</h2>
      <span className='whoami__content'>
        I am a Full Stack Freelance Web Developer from Lancaster, PA. I
        specifically serve the Lancaster, Berks, and Lebanon areas, but I can do
        remote work for anyone anywhere in the world. I specialize in building
        websites with HTML, CSS, Javascript, ReactJS, and NodeJS. I am always
        looking for new amazing people to serve, so let’s work together to make
        your business a success!
      </span>
      <img
        src='/public/images/whoami-photo.png'
        alt='Who Am I Photo'
        className='whoami__photo'
      />
      <img
        src='/public/images/orange-vector.png'
        alt='Orange Vector'
        className='whoami__vector'
      />
      <button className='landing__button'>Get a Free Quote</button>
    </div>
  )
}

export default Landing
